import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import ContextualActionCard from "./ContextualActionCard";
import {
  buildContextualActionHref,
  type ContextualActionConfig,
} from "../../data/advocacy/contextualAction";

type Placement =
  | {
      mode: "append-to-native-action";
      anchorText: string;
    }
  | {
      mode: "before-anchor";
      anchorText: string;
    }
  | {
      mode: "append-to-section";
      anchorText: string;
    }
  | {
      mode: "after-section";
      anchorText: string;
    };

type ContextualRouteAction = ContextualActionConfig & {
  placement: Placement;
  compact?: boolean;
};

const contextualActionsByPath: Record<string, ContextualRouteAction> = {
  "/resources/legislative-tracker/2026-07-01": {
    placement: {
      mode: "append-to-native-action",
      anchorText: "Ask Louisiana agencies to clarify Act 838 implementation",
    },
    compact: true,
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

  "/blog/liberty-for-some-registries-lifelong-punishment-american-exceptionalism": {
    placement: {
      mode: "before-anchor",
      anchorText: "Sources and next steps",
    },
    recipientId: "journalist",
    primaryPositionId: "punitive",
    secondaryPositionId: "inconsistent-danger",
    formatId: "letter-to-editor",
    headline: "Carry this argument into the public conversation",
    description:
      "This article challenges the contradiction between America’s stated commitment to liberty and its reliance on lifelong public exposure after a sentence ends.",
    recommendation: {
      audienceLabel: "a columnist, editorial board, journalist, or lawmaker",
      suggestion:
        "Ask them to examine why permanent public branding is treated as essential for one category of offense when other democracies use more limited, risk-focused, and nonpublic approaches.",
      actionLabel: "Build a message from this article",
    },
    suggestedAsk:
      "Please examine whether lifelong public registry exposure is evidence-based, proportionate, and consistent with America’s stated commitments to liberty, limited government, and second chances.",
    personalContext:
      "I recently read SOLAR’s article comparing the United States’ public registry model with more limited, risk-focused approaches used in other democratic countries.",
    source: {
      title:
        "Liberty for Some: Registries and Lifelong Punishment as American Exceptionalism",
      path:
        "/blog/liberty-for-some-registries-lifelong-punishment-american-exceptionalism",
      type: "blog",
    },
  },

  "/resources/supervision-conditions-guide": {
    placement: {
      mode: "append-to-section",
      anchorText: "Resources and next steps",
    },
    recipientId: "state-lawmaker",
    primaryPositionId: "one-size-fits-all",
    secondaryPositionId: "punitive",
    formatId: "email",
    headline: "Turn recurring supervision problems into a policy request",
    description:
      "The guide helps individuals comply with the conditions they actually have. A separate policy conversation is appropriate when vague, overbroad, or difficult-to-document rules create avoidable technical-violation risk.",
    recommendation: {
      audienceLabel:
        "a lawmaker, court-policy body, supervision agency leader, or oversight office",
      suggestion:
        "Focus on clear written rules, individualized conditions, reliable approval and documentation processes, and safeguards against punishment for conduct a person could not reasonably understand or control.",
      actionLabel: "Build a supervision-policy message",
    },
    suggestedAsk:
      "Please support clear, individualized, reviewable supervision conditions and reliable written approval processes so that vague instructions, inconsistent enforcement, or documentation failures do not become avoidable technical violations.",
    personalContext:
      "I recently reviewed SOLAR’s Supervision Conditions Guide, which emphasizes the practical importance of written conditions, clarification, documentation, and distinguishing formal conditions from informal instructions.",
    source: {
      title: "Supervision Conditions Guide",
      path: "/resources/supervision-conditions-guide",
      type: "resource-guide",
    },
  },

  "/resources/accountability-watch/2026-07-01": {
    placement: {
      mode: "after-section",
      anchorText: "Watchlist",
    },
    recipientId: "journalist",
    primaryPositionId: "closer-to-home",
    secondaryPositionId: "ineffective",
    formatId: "letter-to-editor",
    headline: "Ask institutions and media to follow the prevention failures",
    description:
      "Accountability Watch documents cases involving trusted access, professional authority, institutional blind spots, and reporting failures. The responsible action is systemic—not harassment or pressure aimed at defendants, families, courts, or employers in pending cases.",
    recommendation: {
      audienceLabel:
        "journalists, lawmakers, school boards, licensing bodies, and institutional leaders",
      suggestion:
        "Ask them to focus child-safety policy on trusted access, reporting systems, licensing and oversight, boundary safeguards, and institutional accountability—not only registry maps and stranger-danger narratives.",
      actionLabel: "Build an institutional-accountability message",
    },
    suggestedAsk:
      "Please examine the institutional and prevention failures reflected in these cases and strengthen reporting, oversight, licensing, boundary safeguards, and accountability systems where trusted access to children creates risk.",
    personalContext:
      "I recently reviewed SOLAR’s June 2026 Accountability Watch, which documents allegations and cases involving educators, clergy, law enforcement, medical professionals, coaches, and other trusted or authoritative roles.",
    source: {
      title: "June 2026 Accountability Watch",
      path: "/resources/accountability-watch/2026-07-01",
      type: "accountability-watch",
    },
  },
};

function findTextElement(text: string): HTMLElement | null {
  const candidates = Array.from(
    document.querySelectorAll<HTMLElement>(
      "h1, h2, h3, h4, p, span, div, section",
    ),
  );

  return (
    candidates.find(
      (item) =>
        item.children.length === 0 && item.textContent?.trim() === text,
    ) ??
    candidates.find((item) => item.textContent?.trim() === text) ??
    null
  );
}

function findSection(element: HTMLElement): HTMLElement | null {
  return element.closest<HTMLElement>("section, article");
}

function createMountNode(
  config: ContextualRouteAction,
): HTMLDivElement | null {
  const anchor = findTextElement(config.placement.anchorText);
  if (!anchor) return null;

  const mountNode = document.createElement("div");
  mountNode.dataset.contextualAction = config.source.type;

  switch (config.placement.mode) {
    case "append-to-native-action": {
      const nativeBlock = anchor.parentElement;
      if (!nativeBlock) return null;
      nativeBlock.appendChild(mountNode);
      break;
    }
    case "before-anchor": {
      const anchorContainer = anchor.parentElement;
      if (!anchorContainer?.parentElement) return null;
      anchorContainer.parentElement.insertBefore(mountNode, anchorContainer);
      break;
    }
    case "append-to-section": {
      const section = findSection(anchor);
      if (!section) return null;
      section.appendChild(mountNode);
      break;
    }
    case "after-section": {
      const section = findSection(anchor);
      if (!section?.parentElement) return null;
      section.parentElement.insertBefore(mountNode, section.nextSibling);
      break;
    }
  }

  return mountNode;
}

function CompactContextualAction({
  config,
}: {
  config: ContextualRouteAction;
}): JSX.Element {
  const href = buildContextualActionHref(config);

  return (
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
    </div>
  );
}

export default function ContextualActionRouteOutlet(): JSX.Element | null {
  const { pathname } = useLocation();
  const config = contextualActionsByPath[pathname];
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  const configKey = useMemo(
    () => (config ? `${pathname}:${config.placement.anchorText}` : ""),
    [config, pathname],
  );

  useEffect(() => {
    if (!config) {
      setPortalTarget(null);
      return;
    }

    let mountNode: HTMLDivElement | null = null;

    const attach = () => {
      if (mountNode) return;
      mountNode = createMountNode(config);
      if (mountNode) setPortalTarget(mountNode);
    };

    attach();

    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      setPortalTarget(null);
      mountNode?.remove();
    };
  }, [configKey]);

  if (!config || !portalTarget) return null;

  return createPortal(
    config.compact ? (
      <CompactContextualAction config={config} />
    ) : (
      <ContextualActionCard config={config} className="not-prose" />
    ),
    portalTarget,
  );
}
