import { useLocation } from "react-router-dom";
import ContextualActionCard from "./ContextualActionCard";
import type { ContextualActionConfig } from "../../data/advocacy/contextualAction";

const contextualActionsByPath: Record<string, ContextualActionConfig> = {
  "/resources/legislative-tracker/2026-07-01": {
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

export default function ContextualActionRouteOutlet(): JSX.Element | null {
  const { pathname } = useLocation();
  const config = contextualActionsByPath[pathname];

  if (!config) return null;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
      <ContextualActionCard config={config} className="mt-0" />
    </div>
  );
}
