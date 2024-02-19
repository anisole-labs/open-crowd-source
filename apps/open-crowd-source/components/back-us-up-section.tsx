import { LandingBackUsUp } from "@repo/ui/components/landing-back-us-up";
import { Separator } from "@repo/ui/components/ui/separator";
import { TypographyH1 } from "@repo/ui/components/ui/typography";

import { siteConfig } from "@open-crowd-source/config/site";

export const BackUsUpSection = () => {
  return (
    <>
      <Separator className="w-80%" />
      <TypographyH1 className="w-full text-center mt-8 mb-8">
        Back Us Up
      </TypographyH1>
      <Separator className="w-80%" />
      <LandingBackUsUp {...siteConfig.backUsUpSection} />
    </>
  );
};
