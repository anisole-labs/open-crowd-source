import { LegalPage } from "@repo/ui/components/legal-page";

import { siteConfig } from "@open-crowd-source/config/site";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return <LegalPage {...siteConfig.privacyPolicy} />;
}
