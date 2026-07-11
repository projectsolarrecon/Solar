import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
  getRecipient,
  perspectives,
  positions,
  recipients,
  type AdvocacyFormatId,
  type AdvocacyPerspectiveId,
  type AdvocacyPositionId,
  type AdvocacyRecipientId,
} from "../data/advocacy/actionHubData";

const fieldClass =
  "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100";

export default function AdvocacyActionHub(): JSX.Element {
  const [recipientId, setRecipientId] =
    useState<AdvocacyRecipientId>("state-lawmaker");
  const [positionId, setPositionId] =
    useState<AdvocacyPositionId>("one-size-fits-all");
  const [formatId, setFormatId] = useState<AdvocacyFormatId>("email");
  const [perspectiveId, setPerspectiveId] =
    useState<AdvocacyPerspectiveId>("constituent");
  const [location, setLocation] = useState("");
  const [specificAsk, setSpecificAsk] = useState("");
  const [personalContext, setPersonalContext] = useState("");

  const recipient = getRecipient(recipientId);
  const result = useMemo(
    () =>
      composeAdvocacyMessage({
        recipientId,
        positionId,
        formatId,
        perspectiveId,
        location,
        specificAsk,
        personalContext,
      }),
    [
      recipientId,
      positionId,
      formatId,
      perspectiveId,
      location,
      specificAsk,
      personalContext,
    ],
  );

  const reset = () => {
    setRecipientId("state-lawmaker");
    setPositionId("one-size-fits-all");
    setFormatId("email");
    setPerspectiveId("constituent");
    setLocation("");
    setSpecificAsk("");
    setPersonalContext("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-slate-50 text-slate-800">
      <SEO
        title="SOLAR Advocacy Action Hub | The SOLAR Project"
        description="Choose who you want to reach, what SOLAR position you want to carry forward, and how you want to communicate it."
        keywords="SOLAR advocacy, registry reform, contact lawmakers, advocacy scripts, public testimony, letter to editor"
      />

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.24),transparent_38%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/advocacy"
            className="inline-flex items-center text-sm font-medium text-slate-100 hover:text-white"
          >
            ← Back to Advocacy
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-2xl text-slate-900 shadow-lg ring-4 ring-white/10">
                ☀️
              </div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-200 ring-1 ring-amber-300/30">
                Who · What · How
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              SOLAR Advocacy Action Hub
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              Turn SOLAR’s published positions into a clear, respectful message for
              the person or institution most able to act.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Choose the audience, choose the principle, choose the format—and leave
              with a draft you can use today.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300" />

      <section className="border-b border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-800">
                Grounded in SOLAR’s seven positions
              </p>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
                Every draft begins with SOLAR’s published policy foundation—not
                improvised talking points or generic advocacy language.
              </p>
            </div>
            <Link
              to="/advocacy#position-statement"
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm font-semibold text-amber-900 shadow-sm hover:bg-amber-100"
            >
              Review the full position statement
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

        <section className="mb-8 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-md">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-400 px-5 py-4 text-slate-950 sm:px-6">
            <h2 className="text-xl font-bold">How to use this page</h2>
            <p className="mt-1 text-sm font-medium text-slate-800">
              This is an interactive tool. Make one choice in each step; your draft updates automatically below.
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Choose who",
                text: "Select the person or institution you want to reach.",
                href: "#who",
              },
              {
                number: "2",
                title: "Choose what",
                text: "Select the SOLAR position you want the message to carry.",
                href: "#what",
              },
              {
                number: "3",
                title: "Choose how",
                text: "Select the communication format, then personalize and copy the draft.",
                href: "#how",
              },
            ].map((step, index) => (
              <a
                key={step.number}
                href={step.href}
                className={`group flex gap-4 p-5 transition-colors hover:bg-amber-50 sm:p-6 ${
                  index > 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white group-hover:bg-amber-500 group-hover:text-slate-950">
                  {step.number}
                </span>
                <span>
                  <span className="block font-bold text-slate-900">{step.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                    {step.text}
                  </span>
                </span>
              </a>
            ))}
          </div>
          <div className="border-t border-amber-200 bg-amber-50 px-5 py-3 text-sm text-amber-950 sm:px-6">
            <strong>Look for the highlighted card.</strong> That is your current selection. You can change any choice at any time.
          </div>
        </section>

        <div className="rounded-2xl border border-amber-200 bg-white p-1 shadow-sm">
          <GuideCallout
            tone="info"
            icon="🧭"
            title="One message. One recipient. One clear ask."
          >
            <p>
              This first version uses approved SOLAR position language and a
              deterministic template composer. It does not invent facts, legal claims,
              statistics, or legislation.
            </p>
          </GuideCallout>
        </div>

        <GuideSectionHeader
          id="who"
          number="1"
          title="Who do you want to reach?"
          subtitle="Choose one card below. Start with the person or institution most able to act on the issue."
        />

        <p className="-mt-3 mb-4 text-sm font-semibold text-amber-800">
          Tap or click one recipient card to make your selection.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {recipients.map((item) => {
            const active = item.id === recipientId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setRecipientId(item.id);
                  const firstRecommended = item.recommendedPositions[0];
                  if (firstRecommended) setPositionId(firstRecommended);
                }}
                className={`rounded-2xl border p-5 text-left transition-all ${
                  active
                    ? "border-amber-400 bg-slate-900 text-white shadow-lg ring-2 ring-amber-300/40"
                    : "border-slate-200 bg-white hover:border-amber-300 hover:shadow-md"
                }`}
                aria-pressed={active}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold">{item.label}</h2>
                      {active && (
                        <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-950">
                          Selected
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        active ? "text-slate-200" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <span className="text-sm font-semibold text-slate-700">
            Need the right contact?
          </span>
          {recipient.lookupHref.startsWith("/") ? (
            <Link
              to={recipient.lookupHref}
              className="text-sm font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
            >
              {recipient.lookupLabel}
            </Link>
          ) : (
            <a
              href={recipient.lookupHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
            >
              {recipient.lookupLabel}
            </a>
          )}
        </div>

        <GuideSectionHeader
          id="what"
          number="2"
          title="What do you want them to understand?"
          subtitle="Choose one of SOLAR’s seven published positions. Recommended choices are marked for your selected recipient."
        />

        <p className="-mt-3 mb-4 text-sm font-semibold text-amber-800">
          Tap or click one position card. Your draft will immediately update.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          {positions.map((position) => {
            const active = position.id === positionId;
            const recommended = recipient.recommendedPositions.includes(position.id);
            return (
              <button
                key={position.id}
                type="button"
                onClick={() => setPositionId(position.id)}
                className={`rounded-2xl border-l-4 p-5 text-left transition-all ${
                  active
                    ? "border-amber-500 bg-amber-50 shadow-md ring-1 ring-amber-200"
                    : "border-l-yellow-400 border-y-slate-200 border-r-slate-200 bg-white hover:bg-yellow-50/60 hover:shadow-sm"
                }`}
                aria-pressed={active}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold leading-snug text-slate-900">
                    {position.title}
                  </h3>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    {active && (
                      <span className="rounded-full bg-amber-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-950">
                        Selected
                      </span>
                    )}
                    {recommended && !active && (
                      <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-800">
                        Recommended
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {position.summary}
                </p>
              </button>
            );
          })}
        </div>

        <GuideSectionHeader
          id="how"
          number="3"
          title="How do you want to communicate?"
          subtitle="Choose one format below. The draft will be rewritten to match that format."
        />

        <p className="-mt-3 mb-4 text-sm font-semibold text-amber-800">
          Tap or click one format. The dark highlighted option is selected.
        </p>

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
                  <span className="flex items-center justify-between gap-2 font-bold">
                    {format.label}
                    {active && (
                      <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-950">
                        Selected
                      </span>
                    )}
                  </span>
                  <span
                    className={`mt-1 block text-xs leading-relaxed ${
                      active ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {format.description}
                  </span>
                </button>
              );
            })}
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="personalize"
          number="4"
          title="Add only the context that helps"
          subtitle="Use the fields below to personalize the draft. Only your perspective is required; the other fields are optional."
        />

        <GuideSectionCard>
          <div className="mb-5 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-relaxed text-blue-900">
            The draft updates as you type. You never need to disclose registry status or private case details to use this tool.
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              Your perspective
              <select
                className={fieldClass}
                value={perspectiveId}
                onChange={(event) =>
                  setPerspectiveId(event.target.value as AdvocacyPerspectiveId)
                }
              >
                {perspectives.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-semibold text-slate-700">
              Location <span className="font-normal text-slate-500">(optional)</span>
              <input
                className={fieldClass}
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City, state, or ZIP"
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
              Specific request <span className="font-normal text-slate-500">(optional)</span>
              <input
                className={fieldClass}
                value={specificAsk}
                onChange={(event) => setSpecificAsk(event.target.value)}
                placeholder={recipient.defaultAsk}
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
              Local or personal context <span className="font-normal text-slate-500">(optional)</span>
              <textarea
                className={`${fieldClass} min-h-28`}
                value={personalContext}
                onChange={(event) => setPersonalContext(event.target.value)}
                placeholder="Add one brief example about housing, work, family impact, public safety, reporting, or a current local debate."
              />
            </label>
          </div>
        </GuideSectionCard>

        <GuideSectionHeader
          id="draft"
          number="5"
          title="Use your draft"
          subtitle="Your selections have been assembled below. Replace the bracketed placeholders, read it once, then copy or print it."
        />

        <div className="rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-1 shadow-sm">
          <ScriptBox
            title={result.title}
            context={
              result.subject ? (
                <span>
                  Suggested subject: <strong>{result.subject}</strong>
                </span>
              ) : undefined
            }
            script={result.script}
            tone="research"
            buttonLabel="Copy draft"
          />
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
