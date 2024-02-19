import {
  HeroSection,
  HeroSectionProps,
} from "@repo/ui/components/hero-section";

const heroProps: HeroSectionProps = {
  title: "Gym Notes",
  titleSupport: "Your Workout Companion Redefined",
  description: `Gym Notes is designed to simplify your workout routine, track your progress with precision, and motivate you through advanced data visualization. It's your workout journey, made smarter!`,
};

export const Hero = () => {
  return <HeroSection {...heroProps} />;
};
