import { HeroSection } from "@repo/ui/components/hero-section";
import { LandingBackUsUp } from "@repo/ui/components/landing-back-us-up";
import { LandingFeature } from "@repo/ui/components/landing-page-feature";
import { Separator } from "@repo/ui/components/ui/separator";

import { SectionSeperator } from "@repo/ui/components/section-seperator";

import { siteConfig } from "@open-crowd-source/config/site";

export default function Page() {
  return (
    <>
      <HeroSection {...siteConfig.heroSection} />

      <SectionSeperator sectionHeader="Features" />

      {siteConfig.featureSection.features.map((feature, index) => {
        return (
          <>
            <Separator className="w-80%" key={index} />
            <LandingFeature {...feature} key={index} />
          </>
        );
      })}

      <SectionSeperator sectionHeader="Back Us Up" />

      <LandingBackUsUp {...siteConfig.backUsUpSection} />
    </>
  );
}
