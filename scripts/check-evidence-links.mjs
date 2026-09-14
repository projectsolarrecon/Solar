import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_FILES = [
  "src/pages/resources/researchDataSources1.ts",
  "src/pages/resources/researchDataSources2.ts",
  "src/pages/resources/researchDataSources3.ts",
  "src/pages/resources/researchDataSources4.ts",
];
const CLAIMS_FILE = "src/pages/resources/SupportedClaimsGuide.tsx";
const REPORT_JSON = "evidence-link-report.json";
const REPORT_MD = "evidence-link-report.md";
const BASELINE_VERIFIED_AT = "2026-09-13";
const TIMEOUT_MS = 20_000;
const strict = process.argv.includes("--strict");

const normalizeUrl = (value) => value.replace(/&amp;/g, "&");

async function extractTargets() {
  const targets = [];

  for (const relativePath of SOURCE_FILES) {
    const text = await readFile(path.join(ROOT, relativePath), "utf8");
    const sourceRegex = /(SE\d+):\s*\{[^\n]*?title:\s*"([^"]+)"[^\n]*?href:\s*"([^"]+)"/g;
    for (const match of text.matchAll(sourceRegex)) {
      targets.push({
        key: match[1],
        label: match[2],
        url: normalizeUrl(match[3]),
        file: relativePath,
        catalog: "Research & Data",
      });
    }
  }

  const claimsText = await readFile(path.join(ROOT, CLAIMS_FILE), "utf8");
  const claimsRegex = /^\s{2}([A-Za-z0-9]+):\s*\{\s*\n\s*label:\s*"([^"]+)",\s*\n\s*href:\s*"([^"]+)"/gm;
  for (const match of claimsText.matchAll(claimsRegex)) {
    targets.push({
      key: match[1],
      label: match[2],
      url: normalizeUrl(match[3]),
      file: CLAIMS_FILE,
      catalog: "Supported Claims",
    });
  }

  return targets;
}

function isGenericRootRedirect(original, finalUrl) {
  try {
    const before = new URL(original);
    const after = new URL(finalUrl);
    const startedSpecific = before.pathname !== "/" && before.pathname.length > 1;
    const endedAtRoot = after.pathname === "/" || after.pathname === "";
    return startedSpecific && endedAtRoot;
  } catch {
    return false;
  }
}

async function readHtmlPrefix(response, maxBytes = 96_000) {
  if (!response.body) return "";
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let total = 0;
  let text = "";
  try {
    while (total < maxBytes) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      text += decoder.decode(value, { stream: true });
      if (/<\/head>/i.test(text)) break;
    }
  } finally {
    await reader.cancel().catch(() => {});
  }
  return text;
}

async function checkUrl(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "SOLAR-Evidence-Link-Health/1.0 (+https://thesolarproject.org)",
        Accept: "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8",
      },
    });

    const contentType = response.headers.get("content-type") || "";
    let pageTitle = "";
    if (contentType.includes("text/html")) {
      const prefix = await readHtmlPrefix(response);
      const match = prefix.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      pageTitle = match ? match[1].replace(/\s+/g, " ").trim() : "";
    } else {
      await response.body?.cancel().catch(() => {});
    }

    const status = response.status;
    const finalUrl = response.url || url;
    const genericRootRedirect = isGenericRootRedirect(url, finalUrl);

    if (status === 404 || status === 410) {
      return { state: "hard-failure", status, finalUrl, pageTitle, reason: `HTTP ${status}` };
    }
    if (status === 403 || status === 405 || status === 429) {
      return {
        state: "warning",
        status,
        finalUrl,
        pageTitle,
        reason: `HTTP ${status}; may be bot/rate-limit behavior and needs human confirmation`,
      };
    }
    if (status >= 400) {
      return { state: "hard-failure", status, finalUrl, pageTitle, reason: `HTTP ${status}` };
    }
    if (genericRootRedirect) {
      return {
        state: "semantic-drift",
        status,
        finalUrl,
        pageTitle,
        reason: "Specific source URL redirected to a site root/homepage",
      };
    }
    return { state: "ok", status, finalUrl, pageTitle, reason: "" };
  } catch (error) {
    const reason = error?.name === "AbortError" ? `Timed out after ${TIMEOUT_MS / 1000}s` : String(error?.message || error);
    return { state: "hard-failure", status: null, finalUrl: url, pageTitle: "", reason };
  } finally {
    clearTimeout(timer);
  }
}

const targets = await extractTargets();
const unique = new Map();
for (const target of targets) {
  const existing = unique.get(target.url);
  if (existing) existing.refs.push(target);
  else unique.set(target.url, { url: target.url, refs: [target] });
}

const results = [];
for (const [index, item] of [...unique.values()].entries()) {
  process.stdout.write(`[${index + 1}/${unique.size}] ${item.url}\n`);
  const check = await checkUrl(item.url);
  results.push({ ...item, ...check });
  if (check.state !== "ok") {
    const annotation = check.state === "warning" ? "warning" : "warning";
    console.log(`::${annotation} title=Evidence link ${check.state}::${item.url} — ${check.reason}`);
  }
}

const hardFailures = results.filter((item) => item.state === "hard-failure");
const semanticDrift = results.filter((item) => item.state === "semantic-drift");
const warnings = results.filter((item) => item.state === "warning");
const attention = [...hardFailures, ...semanticDrift, ...warnings];
const report = {
  generatedAt: new Date().toISOString(),
  baselineVerifiedAt: BASELINE_VERIFIED_AT,
  recordCount: targets.length,
  uniqueUrlCount: unique.size,
  okCount: results.length - attention.length,
  hardFailureCount: hardFailures.length,
  semanticDriftCount: semanticDrift.length,
  warningCount: warnings.length,
  attentionCount: attention.length,
  results,
};

await writeFile(path.join(ROOT, REPORT_JSON), `${JSON.stringify(report, null, 2)}\n`, "utf8");

const lines = [
  "# Evidence link health",
  "",
  `Baseline semantic audit: **${BASELINE_VERIFIED_AT}**`,
  `Checked **${targets.length} source references** across **${unique.size} unique URLs**.`,
  "",
  `- Healthy: **${report.okCount}**`,
  `- Hard failures: **${hardFailures.length}**`,
  `- Semantic-drift flags: **${semanticDrift.length}**`,
  `- Bot/rate-limit warnings: **${warnings.length}**`,
  "",
];

if (attention.length === 0) {
  lines.push("No links require review.", "");
} else {
  lines.push("## Links requiring review", "");
  for (const item of attention) {
    const refs = item.refs.map((ref) => `${ref.catalog}: ${ref.key} — ${ref.label}`).join("; ");
    lines.push(`- **${item.state}** — ${refs}`);
    lines.push(`  - URL: ${item.url}`);
    if (item.finalUrl && item.finalUrl !== item.url) lines.push(`  - Final: ${item.finalUrl}`);
    if (item.status !== null) lines.push(`  - HTTP: ${item.status}`);
    if (item.pageTitle) lines.push(`  - Page title: ${item.pageTitle}`);
    lines.push(`  - Reason: ${item.reason}`, "");
  }
}

lines.push(
  "## What this check can and cannot prove",
  "",
  "This automated check verifies transport health and catches a high-value semantic failure mode: a specific deep link silently redirecting to a generic site homepage. It does **not** replace the human semantic audit that established the baseline; publisher anti-bot behavior and content changes can require manual review.",
  "",
);

await writeFile(path.join(ROOT, REPORT_MD), `${lines.join("\n")}\n`, "utf8");
console.log(lines.join("\n"));

if (strict && (hardFailures.length > 0 || semanticDrift.length > 0)) {
  process.exitCode = 1;
}
