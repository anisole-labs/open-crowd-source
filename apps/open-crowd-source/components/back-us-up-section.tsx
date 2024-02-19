import {
  LandingBackUsUp,
  LandingBackUsUpProps,
} from "@repo/ui/components/landing-back-us-up";
import { Separator } from "@repo/ui/components/ui/separator";
import { TypographyH1 } from "@repo/ui/components/ui/typography";

const gymNotesBackUsUpProps: LandingBackUsUpProps = {
  id: "back-us-up",
  title: "Campaign Commentary",
  description:
    "Over the past year I've developed a keen interest in daily workouts. During my journey, I've come to realize the importance of regular tracking, but also the tediousness of creating effective personalized routines. With these key factors in mind, we are developing Gym Notes. Our modest goal of $100 in 3 months is the litmus test for our project's viability. Your backing validates our vision, sparking the development of an app made to redefine workout tracking. If we don't reach our goal, you won't be left high and dry. Every last penny will be refunded to you. We are in this together. Let's make it happen!",
  products: [
    {
      title: "Early Bird",
      description: "Get the app at a discounted price, forever.",
      content:
        "Become an early adopter and lock-in a lifetime discounted annual subscription rate of just $ 5.99. Can't back us up right now? No worries - join us for an entire year of premium features after the launch at $ 11.99.",
      buttonLink: "/api/subscribe",
      buttonText: "Become a Founding Member",
    },
    {
      title: "Get notified at launch",
      description: "Can't back us up now? Get notified when we launch.",
      content:
        "Sign up for updates and we'll let you know when we're live. No spam, just a single email when we're ready to roll out.",
      buttonLink: "/api/waitlist",
      buttonText: "Get Notified",
    },
  ],
};

export const BackUsUpSection = () => {
  return (
    <>
      <Separator className="w-80%" />
      <TypographyH1 className="w-full text-center mt-8 mb-8">
        Back Us Up
      </TypographyH1>
      <Separator className="w-80%" />
      <LandingBackUsUp {...gymNotesBackUsUpProps} />
    </>
  );
};
