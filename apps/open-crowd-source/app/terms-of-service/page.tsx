import { LegalPage } from "@repo/ui/components/legal-page";

import { siteConfig } from "@open-crowd-source/config/site";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsOfService() {
  return <LegalPage {...siteConfig.termsOfService} />;
}
