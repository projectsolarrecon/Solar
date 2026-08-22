import { useLayoutEffect } from "react";
import RegistryComplianceVerificationGuideContent from "./RegistryComplianceVerificationGuideContent";

export default function RegistryComplianceVerificationGuide(): JSX.Element {
  useLayoutEffect(() => {
    const jumpToSources = document.querySelector<HTMLAnchorElement>(
      'a[href="#sources"]'
    );

    jumpToSources?.setAttribute("href", "#resources-sources");
  }, []);

  return <RegistryComplianceVerificationGuideContent />;
}
