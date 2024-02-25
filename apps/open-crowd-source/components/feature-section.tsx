import { LandingFeature } from "@repo/ui/components/landing-page-feature";
import { Separator } from "@repo/ui/components/ui/separator";
import { TypographyH1 } from "@repo/ui/components/ui/typography";

import { siteConfig } from "@open-crowd-source/config/site";

export const FeatureSection = () => {
  return (
    <>
      <Separator className="w-80%" />
      <TypographyH1 className="w-full text-center mt-8 mb-8">
        Features
      </TypographyH1>

      {siteConfig.featureSection.features.map((feature, index) => {
        return (
          <>
            <Separator className="w-80%" key={index} />
            <LandingFeature {...feature} key={index} />
          </>
        );
      })}
    </>
  );
};
