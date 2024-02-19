import {
  LandingFeature,
  LandingFeatureProps,
} from "@repo/ui/components/landing-page-feature";
import { Separator } from "@repo/ui/components/ui/separator";
import { TypographyH1 } from "@repo/ui/components/ui/typography";

const gymNotesFeatures: LandingFeatureProps[] = [
  {
    id: "routine",
    title: "Routines",
    description:
      "Tackle workouts with ease! You can either choose from a plethora of pre-configured routines, or dive into the routines shared by the community. Fine-tune your sessions with customizable sets, reps, and exercises.",
    imageLight: "/images/routine-light.png",
    imageDark: "/images/routine-dark.png",
    imageAlt: "Routine examples",
  },
  {
    id: "track-workout",
    title: "Track Workout",
    description:
      "Your workout, your rules! Record every lift, note, and personal best. Missing an exercise in our database? No problem - create your own and assign tags for sophisticated analysis. It's your digital workout journal.",
    imageLight: "/images/track-light.png",
    imageDark: "/images/track-dark.png",
    imageAlt: "Track workout examples",
    layoutReversed: true,
  },
  {
    id: "graphs",
    title: "Graphs and Stats",
    description:
      "Visually track your gains and achieve your goals. Our graphs help you visualize progress across every exercise, understand trends, and even estimate personal bests. Filter and funnel your focus to the lift that matters to you.",
    imageLight: "/images/graph-light.png",
    imageDark: "/images/graph-dark.png",
    imageAlt: "Graphs and stats examples",
  },
];

export const FeatureSection = () => {
  return (
    <>
      <Separator className="w-80%" />
      <TypographyH1 className="w-full text-center mt-8 mb-8">
        Features
      </TypographyH1>

      {gymNotesFeatures.map((gymNotesFeature, index) => {
        return (
          <>
            <Separator className="w-80%" key={index} />
            <LandingFeature {...gymNotesFeature} key={index} />
          </>
        );
      })}
    </>
  );
};
