import { HeroSection } from "@repo/ui/components/hero-section";

import { siteConfig } from "@open-crowd-source/config/site";

export const Hero = () => {
  return <HeroSection {...siteConfig.heroSection} />;
};
