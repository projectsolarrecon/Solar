import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const SITE_ORIGIN = 'https://thesolarproject.org';
const FORBIDDEN_ORIGIN = ['https://solar', 'project.org'].join('');
const TEXT_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.html', '.txt', '.xml']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else if (TEXT_EXTENSIONS.has(path.extname(entry.name))) files.push(fullPath);
  }
  return files;
}

const filesToCheck = [
  ...(await walk(path.join(ROOT, 'src'))),
  ...(await walk(path.join(ROOT, 'public'))),
  path.join(ROOT, 'index.html'),
];

const forbiddenHits = [];
for (const file of filesToCheck) {
  const content = await readFile(file, 'utf8');
  if (content.includes(FORBIDDEN_ORIGIN)) {
    forbiddenHits.push(path.relative(ROOT, file));
  }
}

if (forbiddenHits.length) {
  throw new Error(
    `Deprecated site origin found in indexing-facing files:\n${forbiddenHits.map((file) => ` - ${file}`).join('\n')}`,
  );
}

const robots = await readFile(path.join(ROOT, 'public', 'robots.txt'), 'utf8');
const expectedSitemapDeclaration = `Sitemap: ${SITE_ORIGIN}/sitemap.xml`;
if (!robots.includes(expectedSitemapDeclaration)) {
  throw new Error(`robots.txt must contain: ${expectedSitemapDeclaration}`);
}

const sitemap = await readFile(path.join(ROOT, 'public', 'sitemap.xml'), 'utf8');
const requiredUrls = [
  `${SITE_ORIGIN}/blog/the-man-on-the-map-wasnt-the-danger`,
  `${SITE_ORIGIN}/resources/state-registry/states/hi`,
  `${SITE_ORIGIN}/resources/risk-assessment-guide`,
  `${SITE_ORIGIN}/resources/registry-effectiveness-evidence-guide`,
];

for (const url of requiredUrls) {
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    throw new Error(`Generated sitemap is missing expected canonical URL: ${url}`);
  }
}

const forbiddenSitemapFragments = [
  '/resources/resource-guide-sandbox',
  '/resources/legislative-tracker/2099-',
];
for (const fragment of forbiddenSitemapFragments) {
  if (sitemap.includes(fragment)) {
    throw new Error(`Generated sitemap contains a non-indexable preview route: ${fragment}`);
  }
}

console.log('Indexing configuration checks passed.');
