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
  "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200";

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
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SEO
        title="SOLAR Advocacy Action Hub | The SOLAR Project"
        description="Choose who you want to reach, what SOLAR position you want to carry forward, and how you want to communicate it."
        keywords="SOLAR advocacy, registry reform, contact lawmakers, advocacy scripts, public testimony, letter to editor"
      />

      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-700 text-white py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/advocacy"
            className="inline-flex items-center text-sm text-slate-200 hover:text-white"
          >
            ← Back to Advocacy
          </Link>

          <div className="mt-6 max-w-4xl">
            <span className="inline-flex rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-200 ring-1 ring-amber-300/30">
              Who · What · How
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              SOLAR Advocacy Action Hub
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              Choose the audience, select the SOLAR position, and create a calm,
              clear message you can use today.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <ShareBar />

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

        <GuideSectionHeader
          id="who"
          number="1"
          title="Who do you want to reach?"
          subtitle="Start with the person or institution most able to act on the issue."
        />

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
                    ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                    : "border-slate-200 bg-white hover:border-slate-400 hover:shadow-md"
                }`}
                aria-pressed={active}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">{item.label}</h2>
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

        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
          <span className="text-sm font-semibold text-slate-700">
            Need the right contact?
          </span>
          {recipient.lookupHref.startsWith("/") ? (
            <Link
              to={recipient.lookupHref}
              className="text-sm font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4"
            >
              {recipient.lookupLabel}
            </Link>
          ) : (
            <a
              href={recipient.lookupHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4"
            >
              {recipient.lookupLabel}
            </a>
          )}
        </div>

        <GuideSectionHeader
          id="what"
          number="2"
          title="What do you want them to understand?"
          subtitle="These are SOLAR’s seven published positions, translated into advocacy-ready choices."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {positions.map((position) => {
            const active = position.id === positionId;
            const recommended = recipient.recommendedPositions.includes(position.id);
            return (
              <button
                key={position.id}
                type="button"
                onClick={() => setPositionId(position.id)}
                className={`rounded-2xl border p-5 text-left transition-all ${
                  active
                    ? "border-amber-500 bg-amber-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-amber-300"
                }`}
                aria-pressed={active}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold leading-snug text-slate-900">
                    {position.title}
                  </h3>
                  {recommended && (
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                      Recommended
                    </span>
                  )}
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
          subtitle="Choose the format that best fits the recipient and the moment."
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
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-slate-50 hover:bg-white"
                  }`}
                >
                  <span className="block font-bold">{format.label}</span>
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
          subtitle="Personal details are optional. You never need to disclose registry status or a private history to use this tool."
        />

        <GuideSectionCard>
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
              Location
              <input
                className={fieldClass}
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City, state, or ZIP"
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
              Specific request
              <input
                className={fieldClass}
                value={specificAsk}
                onChange={(event) => setSpecificAsk(event.target.value)}
                placeholder={recipient.defaultAsk}
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
              Optional local or personal context
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
          subtitle="Read it once, replace the bracketed placeholders, and keep the final message focused on one clear request."
        />

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
