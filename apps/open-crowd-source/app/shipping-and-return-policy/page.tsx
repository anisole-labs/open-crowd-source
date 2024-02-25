import { LegalPage } from "@repo/ui/components/legal-page";

import { siteConfig } from "@open-crowd-source/config/site";

export const metadata = {
  title: "Shipping and Return Policy",
};

export default function ShipingAndReturnPolicy() {
  return <LegalPage {...siteConfig.shipingAndReturnPolicy} />;
}
