import { Link } from "react-router-dom";
import { buildContextualActionHref, type ContextualActionConfig } from "../../data/advocacy/contextualAction";
import { getPosition, getRecipient } from "../../data/advocacy/actionHubData";

export default function ContextualActionCard({
  config,
  className = "",
}: {
  config: ContextualActionConfig;
  className?: string;
}): JSX.Element {
  const recipient = config.recipientId
    ? getRecipient(config.recipientId)
    : undefined;
  const primary = getPosition(config.primaryPositionId);
  const secondary = config.secondaryPositionId
    ? getPosition(config.secondaryPositionId)
    : undefined;
  const href = buildContextualActionHref(config);

  return (
    <aside
      className={`not-prose my-8 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-blue-50 shadow-sm ${className}`}
      aria-labelledby={`contextual-action-${config.primaryPositionId}`}
    >
      <div className="border-b border-amber-200 bg-amber-100/70 px-5 py-3">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-900">
          Suggested next step
        </p>
      </div>

      <div className="p-5 sm:p-6">
        <h2
          id={`contextual-action-${config.primaryPositionId}`}
          className="text-xl font-black leading-snug text-slate-950 sm:text-2xl"
        >
          {config.headline}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
          {config.description}
        </p>

        <div className="mt-5 rounded-xl border border-blue-200 bg-white/80 p-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-800">
            Consider contacting
          </p>
          <p className="mt-1 font-bold text-slate-950">
            {config.recommendation.audienceLabel}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {config.recommendation.suggestion}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          {recipient && (
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
              Audience: {recipient.shortLabel}
            </span>
          )}
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">
            Primary: {primary.title}
          </span>
          {secondary && (
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-blue-900">
              Supporting: {secondary.title}
            </span>
          )}
          {config.jurisdiction && (
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
              {config.jurisdiction}
            </span>
          )}
          {config.billNumber && (
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
              {config.billNumber}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to={href}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold !text-white no-underline shadow-sm transition hover:bg-slate-800 hover:!text-white"
          >
            {config.recommendation.actionLabel}
          </Link>
          <p className="text-xs leading-5 text-slate-500">
            The suggested audience, issues, and request can all be edited in the Action Hub.
          </p>
        </div>
      </div>
    </aside>
  );
}
