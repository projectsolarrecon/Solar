import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import {
  buildContextualActionHref,
  type ContextualActionConfig,
} from "../../data/advocacy/contextualAction";

const contextualActionsByPath: Record<
  string,
  ContextualActionConfig & { nativeActionTitle: string }
> = {
  "/resources/legislative-tracker/2026-07-01": {
    nativeActionTitle: "Ask Louisiana agencies to clarify Act 838 implementation",
    recipientId: "state-lawmaker",
    primaryPositionId: "one-size-fits-all",
    secondaryPositionId: "punitive",
    formatId: "email",
    headline: "Ask Louisiana officials to clarify Act 838 before enforcement begins",
    description:
      "Louisiana Act 838 reduces some visible ID stigma but adds or clarifies QR-code, ID-carry, and static-IP reporting obligations. Clear implementation guidance can reduce avoidable violations before the January 1, 2027 ID provisions take effect.",
    recommendation: {
      audienceLabel:
        "Louisiana lawmakers and the agencies responsible for Act 838 implementation",
      suggestion:
        "Ask officials to publish plain-language guidance explaining QR-code access and privacy, ID-carry enforcement, and static-IP reporting when addresses are assigned or changed by an internet provider.",
      actionLabel: "Build and personalize this message",
    },
    suggestedAsk:
      "Ask Louisiana officials to publish plain-language guidance before enforcement begins, including clear rules for QR-code access, ID-carry obligations, and static-IP reporting when internet addresses are controlled by an ISP.",
    personalContext:
      "I recently read SOLAR’s June 2026 Legislative Tracker analysis of Louisiana Act 838 and its new QR-code, ID-carry, and static-IP reporting requirements.",
    source: {
      title: "June 2026 Legislative Tracker",
      path: "/resources/legislative-tracker/2026-07-01",
      type: "legislative-tracker",
    },
    jurisdiction: "Louisiana",
    billNumber: "HB 784 / Act 838",
  },
};

function findNativeActionBlock(title: string): HTMLElement | null {
  const headings = Array.from(document.querySelectorAll<HTMLElement>("p"));
  const heading = headings.find((item) => item.textContent?.trim() === title);
  return heading?.parentElement ?? null;
}

export default function ContextualActionRouteOutlet(): JSX.Element | null {
  const { pathname } = useLocation();
  const config = contextualActionsByPath[pathname];
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!config) {
      setPortalTarget(null);
      return;
    }

    let mountNode: HTMLDivElement | null = null;

    const attach = () => {
      const nativeBlock = findNativeActionBlock(config.nativeActionTitle);
      if (!nativeBlock || mountNode) return;

      mountNode = document.createElement("div");
      mountNode.dataset.contextualAction = "louisiana-act-838";
      nativeBlock.appendChild(mountNode);
      setPortalTarget(mountNode);
    };

    attach();

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      setPortalTarget(null);
      mountNode?.remove();
    };
  }, [config]);

  if (!config || !portalTarget) return null;

  const href = buildContextualActionHref(config);

  return createPortal(
    <div className="mt-4 border-t border-slate-200 pt-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-800">
        Suggested next step
      </p>
      <p className="mt-2 text-sm font-bold leading-6 text-slate-950">
        Consider contacting {config.recommendation.audienceLabel}.
      </p>
      <p className="mt-1 text-sm leading-6 text-slate-700">
        {config.recommendation.suggestion}
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <Link
          to={href}
          className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-sm hover:bg-amber-400"
        >
          {config.recommendation.actionLabel}
        </Link>
        <p className="text-xs leading-5 text-slate-500">
          The audience, issues, request, and message format remain editable in the Action Hub.
        </p>
      </div>
    </div>,
    portalTarget,
  );
}
