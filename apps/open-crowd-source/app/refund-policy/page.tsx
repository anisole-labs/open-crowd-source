import { LegalPage } from "@repo/ui/components/legal-page";

import { siteConfig } from "@open-crowd-source/config/site";

export const metadata = {
  title: "Refund Policy",
};

export default function RefundPolicy() {
  return <LegalPage {...siteConfig.refundPolicy} />;
}
