import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import ShareBar from "../components/solar/ShareBar";
import {
  GuideCallout,
  GuideSectionCard,
  GuideSectionHeader,
  ScriptBox,
} from "../components/solar";
import {
  composeAdvocacyMessage,
  formats,
  getPosition,
  getPromptExamples,
  getRecipient,
  isReconCompatible,
  perspectives,
  positions,
  recipients,
  researchResourceHref,
  type AdvocacyEvidenceDepth,
  type AdvocacyFormatId,
  type AdvocacyPerspectiveId,
  type AdvocacyPositionId,
  type AdvocacyRecipientId,
} from "../data/advocacy/actionHubData";
import { parseContextualActionParams } from "../data/advocacy/contextualAction";

const fieldClass =
  "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100";

const sourceTypeLabels = {
  blog: "Blog article",
  "resource-guide": "Resource guide",
  "legislative-tracker": "Legislative Tracker",
  "accountability-watch": "Accountability Watch",
} as const;

export default function AdvocacyActionHub(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const contextualAction = useMemo(
    () => parseContextualActionParams(searchParams),
    [searchParams],
  );

  const [recipientId, setRecipientId] = useState<AdvocacyRecipientId>(
    contextualAction?.recipientId ?? "state-lawmaker",
  );
  const [positionIds, setPositionIds] = useState<AdvocacyPositionId[]>(
    contextualAction?.positionIds ?? [],
  );
  const [formatId, setFormatId] = useState<AdvocacyFormatId>(
    contextualAction?.formatId ?? "email",
  );
  const [perspectiveId, setPerspectiveId] =
    useState<AdvocacyPerspectiveId>("constituent");
  const [evidenceDepth, setEvidenceDepth] =
    useState<AdvocacyEvidenceDepth>("supported");
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [contactInformation, setContactInformation] = useState("");
  const [location, setLocation] = useState("");
  const [specificAsk, setSpecificAsk] = useState(
    contextualAction?.suggestedAsk ?? "",
  );
  const [personalContext, setPersonalContext] = useState(
    contextualAction?.personalContext ?? "",
  );

  const recipient = getRecipient(recipientId);
  const primaryPosition = positionIds[0]
    ? getPosition(positionIds[0])
    : undefined;
  const secondaryPosition = positionIds[1]
    ? getPosition(positionIds[1])
    : undefined;
  const promptExamples = primaryPosition
    ? getPromptExamples(recipientId, primaryPosition.id)
    : undefined;

  const result = useMemo(() => {
    if (!positionIds.length) return null;

    return composeAdvocacyMessage({
      recipientId,
      positionIds,
      formatId,
      perspectiveId,
      evidenceDepth,
      senderName,
      recipientName,
      organizationName,
      contactInformation,
      location,
      specificAsk,
      personalContext,
    });
  }, [
    recipientId,
    positionIds,
    formatId,
    perspectiveId,
    evidenceDepth,
    senderName,
    recipientName,
    organizationName,
    contactInformation,
    location,
    specificAsk,
    personalContext,
  ]);

  const choosePosition = (id: AdvocacyPositionId) => {
    const selectedIndex = positionIds.indexOf(id);

    if (selectedIndex >= 0) {
      setPositionIds(positionIds.filter((item) => item !== id));
      return;
    }

    if (id === "recon") {
      const compatibleExisting = positionIds.find((item) =>
        isReconCompatible(item),
      );
      setPositionIds(
        compatibleExisting ? ["recon", compatibleExisting] : ["recon"],
      );
      return;
    }

    if (positionIds[0] === "recon") {
      if (isReconCompatible(id) && positionIds.length < 2) {
        setPositionIds(["recon", id]);
      }
      return;
    }

    if (positionIds.length === 0) {
      setPositionIds([id]);
      return;
    }

    if (positionIds.length === 1) {
      setPositionIds([positionIds[0], id]);
    }
  };

  const makePrimary = (id: AdvocacyPositionId) => {
    if (positionIds[0] === "recon" || id === "recon") return;
    if (!positionIds.includes(id)) return;

    setPositionIds([
      id,
      ...positionIds.filter((item) => item !== id),
    ].slice(0, 2));
  };

  const reset = () => {
    setSearchParams({}, { replace: true });
    setRecipientId("state-lawmaker");
    setPositionIds([]);
    setFormatId("email");
    setPerspectiveId("constituent");
    setEvidenceDepth("supported");
    setSenderName("");
    setRecipientName("");
    setOrganizationName("");
    setContactInformation("");
    setLocation("");
    setSpecificAsk("");
    setPersonalContext("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-slate-50 text-slate-800">
      <SEO
        title="SOLAR Advocacy Action Hub | The SOLAR Project"
        description="Choose who you want to reach, what policy positions you want to carry forward, and how you want to communicate them."
        keywords="SOLAR advocacy, registry reform, RECON, contact lawmakers, advocacy scripts, public testimony, letter to editor"
      />

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.24),transparent_38%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/advocacy"
            className="inline-flex items-center text-sm font-medium text-slate-100 hover:text-white"
          >
            ← Back to Advocacy Positions
          </Link>
          <div className="mt-8 max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              SOLAR Advocacy Action Hub
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              Turn SOLAR’s published positions into a clear, respectful message for
              the person or institution most able to act.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300" />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <ShareBar />

        {contextualAction?.source && (
          <section className="mb-8 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-amber-50 shadow-sm">
            <div className="border-b border-blue-200 bg-blue-100/70 px-5 py-3 sm:px-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-900">
                Suggested from SOLAR content
              </p>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {sourceTypeLabels[contextualAction.source.type]}
                  </p>
                  <h2 className="mt-1 text-xl font-black leading-snug text-slate-950">
                    {contextualAction.source.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
                    The audience, issues, format, request, and context below were suggested from this page. They are a starting point—not locked instructions—and every field remains editable.
                  </p>
                </div>
                <Link
                  to={contextualAction.source.path}
                  className="inline-flex shrink-0 items-center justify-center rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm font-semibold text-blue-900 hover:bg-blue-100"
                >
                  Return to source
                </Link>
              </div>

              {(contextualAction.jurisdiction || contextualAction.billNumber) && (
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                  {contextualAction.jurisdiction && (
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
                      {contextualAction.jurisdiction}
                    </span>
                  )}
                  {contextualAction.billNumber && (
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
                      {contextualAction.billNumber}
                    </span>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="mb-8 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-md">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-400 px-5 py-4 text-slate-950 sm:px-6">
            <h2 className="text-xl font-bold">How to use this page</h2>
            <p className="mt-1 text-sm font-medium text-slate-800">
              Choose one recipient, one required primary issue, and up to one supporting issue.
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {[
              ["1", "Choose who", "Select the person or institution you want to reach.", "#who"],
              ["2", "Choose what", "Select one primary issue and, optionally, one supporting issue.", "#what"],
              ["3", "Choose how", "Select the format, evidence depth, and personal details.", "#how"],
            ].map(([number, title, text, href], index) => (
              <a
                key={number}
                href={href}
                className={`group flex gap-4 p-5 transition-colors hover:bg-amber-50 sm:p-6 ${
                  index > 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white group-hover:bg-amber-500 group-hover:text-slate-950">
                  {number}
                </span>
                <span>
                  <span className="block font-bold text-slate-900">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">{text}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <GuideCallout
          tone="info"
          icon="🧭"
          title="Your voice, supported by careful evidence"
        >
          <p>
            The composer uses curated language and research-backed claims without
            presenting you as speaking for SOLAR.
          </p>
        </GuideCallout>

        <GuideSectionHeader
          id="who"
          number="1"
          title="Who do you want to reach?"
          subtitle="Choose the person or institution most able to act on the issue."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {recipients.map((item) => {
            const active = item.id === recipientId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setRecipientId(item.id)}
                className={`rounded-2xl border p-5 text-left transition-all ${
                  active
                    ? "border-amber-400 bg-slate-900 text-white shadow-lg ring-2 ring-amber-300/40"
                    : "border-slate-200 bg-white hover:border-amber-300 hover:shadow-md"
                }`}
                aria-pressed={active}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold">{item.label}</h2>
                      {active && (
                        <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-950">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className={`mt-2 text-sm leading-relaxed ${active ? "text-slate-200" : "text-slate-600"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm">
          <span className="font-semibold text-slate-700">Need the right contact? </span>
          {recipient.lookupHref.startsWith("/") ? (
            <Link to={recipient.lookupHref} className="font-semibold text-amber-800 underline">
              {recipient.lookupLabel}
            </Link>
          ) : (
            <a href={recipient.lookupHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-800 underline">
              {recipient.lookupLabel}
            </a>
          )}
        </div>

        <GuideSectionHeader
          id="what"
          number="2"
          title="What do you want them to understand?"
          subtitle="Choose one required primary issue and, optionally, one supporting issue. Maximum: two."
        />

        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          <strong>{positionIds.length} of 2 selected.</strong>{" "}
          {positionIds.length === 0
            ? "Recommended cards are suggestions only. Your first selection becomes the primary issue."
            : "Select an active card again to deselect it. The primary issue controls the subject line, main argument, evidence point, and default ask."}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {positions.map((position) => {
            const selectedIndex = positionIds.indexOf(position.id);
            const active = selectedIndex >= 0;
            const primary = selectedIndex === 0;
            const recommended = recipient.recommendedPositions.includes(position.id);
            const disabledByRecon =
              positionIds[0] === "recon" &&
              position.id !== "recon" &&
              !active &&
              !isReconCompatible(position.id);
            const disabledByLimit = positionIds.length >= 2 && !active;
            const disabled = disabledByRecon || disabledByLimit;

            return (
              <article
                key={position.id}
                className={`rounded-2xl border-l-4 p-5 transition-all ${
                  active
                    ? "border-amber-500 bg-amber-50 shadow-md ring-1 ring-amber-200"
                    : disabled
                      ? "border-l-slate-300 border-y-slate-200 border-r-slate-200 bg-slate-50 opacity-60"
                      : "border-l-yellow-400 border-y-slate-200 border-r-slate-200 bg-white hover:bg-yellow-50/60 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => !disabled && choosePosition(position.id)}
                  disabled={disabled}
                  className="w-full text-left disabled:cursor-not-allowed"
                  aria-pressed={active}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold leading-snug text-slate-900">{position.title}</h3>
                    <div className="flex shrink-0 flex-col items-end gap-1.5">
                      {primary && (
                        <span className="rounded-full bg-amber-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-950">Primary</span>
                      )}
                      {active && !primary && (
                        <span className="rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">Supporting</span>
                      )}
                      {recommended && !active && !disabled && (
                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-800">Recommended</span>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{position.summary}</p>
                  {position.helperText && (
                    <p className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs leading-relaxed text-blue-900">
                      {position.helperText}
                    </p>
                  )}
                  {disabledByRecon && (
                    <p className="mt-3 text-xs font-semibold text-slate-600">
                      This issue is not available as a RECON pairing.
                    </p>
                  )}
                  {disabledByLimit && !disabledByRecon && (
                    <p className="mt-3 text-xs font-semibold text-slate-600">
                      Deselect an issue before choosing another.
                    </p>
                  )}
                </button>
                {active && !primary && positionIds[0] !== "recon" && (
                  <button
                    type="button"
                    onClick={() => makePrimary(position.id)}
                    className="mt-4 text-sm font-semibold text-amber-900 underline underline-offset-4"
                  >
                    Make primary
                  </button>
                )}
              </article>
            );
          })}
        </div>

        {positionIds[0] === "recon" && (
          <GuideCallout
            tone="warning"
            icon="⚖️"
            title="RECON remains the primary frame"
          >
            <p>
              RECON may be used alone or paired with one registry-focused supporting issue.
              It cannot be moved into the supporting position, and generated asks never advocate
              creating registries for every crime.
            </p>
          </GuideCallout>
        )}

        {primaryPosition ? (
          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-800">
              Evidence supporting the primary selection
            </p>
            <p className="mt-2 text-sm leading-relaxed text-blue-950">
              {primaryPosition.evidencePoint}
            </p>
            <p className="mt-2 text-xs font-semibold text-blue-700">
              Source references: {primaryPosition.sourceIds.join(", ")}
            </p>
            {secondaryPosition && (
              <p className="mt-3 text-sm text-blue-900">
                Supporting issue: <strong>{secondaryPosition.title}</strong>
              </p>
            )}
            <Link
              to={researchResourceHref}
              className="mt-4 inline-flex rounded-xl border border-blue-300 bg-white px-4 py-2.5 text-sm font-semibold text-blue-900 hover:bg-blue-100"
            >
              Review research and sources
            </Link>
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-950">
            Choose a primary issue to see its supporting evidence and build your draft.
          </div>
        )}

        <GuideSectionHeader
          id="how"
          number="3"
          title="How do you want to communicate?"
          subtitle="Choose one format and decide whether to include a concise evidence point."
        />

        <GuideSectionCard>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {formats.map((format) => {
              const active = format.id === formatId;
              return (
                <button
                  key={format.id}
                  type="button"
                  onClick={() => setFormatId(format.id)}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    active
                      ? "border-amber-400 bg-slate-900 text-white ring-2 ring-amber-200"
                      : "border-slate-200 bg-slate-50 hover:border-amber-300 hover:bg-amber-50"
                  }`}
                  aria-pressed={active}
                >
                  <span className="font-bold">{format.label}</span>
                  <span className={`mt-1 block text-xs leading-relaxed ${active ? "text-slate-200" : "text-slate-600"}`}>
                    {format.description}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2">
            {[
              ["plain", "Plain message", "Use the policy argument without a research paragraph."],
              ["supported", "Include one evidence point", "Add one concise research point supporting the primary issue."],
            ].map(([id, label, description]) => {
              const active = evidenceDepth === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setEvidenceDepth(id as AdvocacyEvidenceDepth)}
                  className={`rounded-xl border p-4 text-left ${
                    active ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100" : "border-slate-200 bg-white"
                  }`}
                >
                  <span className="font-bold text-slate-900">{label}</span>
                  <p className="mt-1 text-sm text-slate-600">{description}</p>
                </button>
              );
            })}
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="personalize"
          number="4"
          title="Add the details that help"
          subtitle="Fill in only the merge fields you want completed."
        />

        <GuideSectionCard>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              Your name <span className="font-normal text-slate-500">(optional)</span>
              <input className={fieldClass} value={senderName} onChange={(event) => setSenderName(event.target.value)} placeholder="Jordan Smith" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Recipient name or title <span className="font-normal text-slate-500">(optional)</span>
              <input className={fieldClass} value={recipientName} onChange={(event) => setRecipientName(event.target.value)} placeholder={recipientId === "journalist" ? "Reporter or editor name" : "Representative Lee or Councilmember Garcia"} />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Your perspective
              <select className={fieldClass} value={perspectiveId} onChange={(event) => setPerspectiveId(event.target.value as AdvocacyPerspectiveId)}>
                {perspectives.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Location <span className="font-normal text-slate-500">(optional)</span>
              <input className={fieldClass} value={location} onChange={(event) => setLocation(event.target.value)} placeholder="City, state, or ZIP" />
            </label>
            {perspectiveId === "organization" && (
              <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
                Organization name <span className="font-normal text-slate-500">(optional)</span>
                <input className={fieldClass} value={organizationName} onChange={(event) => setOrganizationName(event.target.value)} placeholder="Organization or coalition name" />
              </label>
            )}
            <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
              Contact information <span className="font-normal text-slate-500">(optional)</span>
              <input className={fieldClass} value={contactInformation} onChange={(event) => setContactInformation(event.target.value)} placeholder="Email address, phone number, or preferred contact line" />
            </label>
            <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
              Specific request <span className="font-normal text-slate-500">(optional)</span>
              <input
                className={fieldClass}
                value={specificAsk}
                onChange={(event) => setSpecificAsk(event.target.value)}
                placeholder={promptExamples?.specificAsk ?? "Choose a primary issue to see a suggested request."}
              />
              <span className="mt-2 block text-xs font-normal text-slate-500">
                {promptExamples
                  ? `Example: ${promptExamples.specificAsk}`
                  : "A tailored example will appear after you choose a primary issue."}
              </span>
            </label>
            <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
              Local or personal context <span className="font-normal text-slate-500">(optional)</span>
              <textarea
                className={`${fieldClass} min-h-28`}
                value={personalContext}
                onChange={(event) => setPersonalContext(event.target.value)}
                placeholder={promptExamples?.personalContext ?? "Choose a primary issue to see a suggested example."}
              />
              <span className="mt-2 block text-xs font-normal text-slate-500">
                {promptExamples
                  ? `Example: ${promptExamples.personalContext}`
                  : "A tailored example will appear after you choose a primary issue."}
              </span>
            </label>
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="draft"
          number="5"
          title="Use your draft"
          subtitle="Review, copy, or print the message below."
        />

        <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700">
          Any field you leave blank remains a bracketed placeholder for you to complete later.
        </div>

        {result ? (
          <div className="rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-1 shadow-sm">
            <ScriptBox
              title={result.title}
              context={result.subject ? <span>Suggested subject: <strong>{result.subject}</strong></span> : undefined}
              script={result.script}
              tone="research"
              buttonLabel="Copy draft"
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center text-sm leading-relaxed text-amber-950">
            Select a primary issue above to generate your draft.
          </div>
        )}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Print this page
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Start over
          </button>
          <Link
            to="/resources/legislative-advocacy-guide"
            className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-center text-sm font-semibold text-amber-900 hover:bg-amber-100"
          >
            Read the Legislative Advocacy Guide
          </Link>
          <Link
            to={researchResourceHref}
            className="rounded-xl border border-blue-300 bg-blue-50 px-5 py-3 text-center text-sm font-semibold text-blue-900 hover:bg-blue-100"
          >
            Review Research & Data Sources
          </Link>
        </div>

        <GuideCallout
          tone="legal"
          icon="⚖️"
          title="Before sharing case details"
        >
          <p>
            If you have a pending case, active appeal, open investigation,
            supervision restriction, or unresolved registration question, avoid
            including details that could create legal or supervision risk. General
            policy advocacy is still possible.
          </p>
        </GuideCallout>
      </main>
    </div>
  );
}
