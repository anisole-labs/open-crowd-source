import { Metadata } from "next";

import { GetCrowdsourceHandlerProps } from "@repo/api";
import { HeroSectionProps } from "@repo/ui/components/hero-section";
import { LandingBackUsUpProps } from "@repo/ui/components/landing-back-us-up";
import { LandingFeatureProps } from "@repo/ui/components/landing-page-feature";
import { LegalPageProps } from "@repo/ui/components/legal-page";
import { SiteFooterProps } from "@repo/ui/components/site-footer";

type TsiteConfig = {
  // general info
  name: string;

  // next metadata
  metadata: Metadata;

  // landing page sections
  heroSection: HeroSectionProps;
  featureSection: {
    features: LandingFeatureProps[];
  };
  backUsUpSection: LandingBackUsUpProps;

  // legal pages
  privacyPolicy: LegalPageProps;
  termsOfService: LegalPageProps;
  refundPolicy: LegalPageProps;

  // footer
  footerSection: SiteFooterProps;
} & GetCrowdsourceHandlerProps;

export const siteConfig: TsiteConfig = {
  name: "Gym Notes",
  milestone: {
    amountGoal: 10000,
    date: "2025-01-01",
  },
  metadata: {
    title: {
      default: "Gym Notes",
      template: `%s - Gym Notes`,
    },
    description: "Gym Notes is a note-taking app for gym-goers.",
    keywords: ["gym", "workout", "fitness", "health"],
    authors: [
      {
        name: "Rahul Singh",
        url: "https://twitter.com/rahool_lol",
      },
      {
        name: "Suyash Goylit",
        url: "https://twitter.com/GoylitSuyash",
      },
    ],
    creator: "anisolelabs",
    icons: {
      icon: "/favicon.ico",
    },
  },
  heroSection: {
    title: "Gym Notes",
    titleSupport: "Your Workout Companion Redefined",
    description: `Gym Notes is designed to simplify your workout routine, track your progress with precision, and motivate you through advanced data visualization. It's your workout journey, made smarter!`,
  },
  featureSection: {
    features: [
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
    ],
  },
  backUsUpSection: {
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
        requestBody: {
          productId: "early-bird",
        },
      },
      {
        title: "Get notified at launch",
        description: "Can't back us up now? Get notified when we launch.",
        content:
          "Sign up for updates and we'll let you know when we're live. No spam, just a single email when we're ready to roll out.",
        buttonLink: "/api/waitlist",
        buttonText: "Get Notified",
        requestBody: {},
      },
    ],
  },
  privacyPolicy: {
    title: "Privacy Policy",
    description:
      "At Anisole Labs (parent of Gym Notes), we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information when you use our product.",
    footer:
      "If you have any questions or concerns about our privacy policy, please contact us at gymnotes@anisolelabs.com",
    legalContent: [
      {
        title: "Information We Collect",
        content:
          "We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form. Aditionally, we may collect anonymous data for the purpose of improving our product and services.",
      },
      {
        title: "How We Use Your Information",
        content:
          "Any of the information we collect from you may be used in one of the following ways: To personalize your experience and to communicate with you. Additionally, we may use for information to protect our rights: We may release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety.",
      },
      {
        title: "How We Protect Your Information",
        content:
          "We use industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your personal information.",
      },
      {
        title: "Sharing Your Information",
        content:
          "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. We may share anonymous usage data with third-party service providers to help us improve our product and services.",
      },
      {
        title: "Changes to Privacy Policy",
        content:
          "We reserve the right to modify this privacy policy at any time. If we make material changes to this policy, we will notify you by email or by posting a notice on our website.",
      },
    ],
  },
  refundPolicy: {
    title: "Refund Policy",
    description:
      "At Gym Notes, we strive to provide the best possible experience for our users. Nonetheless, if you are not satisfied with our product, here is our refund policy.",
    footer:
      "If you have any questions or concerns about our refund policy, please contact us at gymnotes@anisolelabs.com",
    legalContent: [
      {
        title: "Refund Policy",
        content:
          "We do not offer refunds for our product. However, if our crowd source campaign fails, we will refund the money to the backers. Nonetheless, If you believe that you have been charged in error or that there has been unauthorized use of your account, please contact us.",
      },
      {
        title: "Changes to Refund Policy",
        content:
          "We reserve the right to modify this refund policy at any time. If we make material changes to this policy, we will notify you by email or by posting a notice on our website.",
      },
    ],
  },
  termsOfService: {
    title: "Terms of Service",
    description:
      "Welcome to Gym Notes! Our product is designed to help you track your workouts and progress. Before you get started, please read our terms of service.",
    footer:
      "If you have any questions or concerns about our terms of service, please contact us at gymnotes@anisolelabs.com",
    legalContent: [
      {
        title: "Acceptance of Terms",
        content:
          "By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.",
      },
      {
        title: "Use of the Service",
        content:
          "Our service is intented for personal as well as commercial use. You may not use the service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright)",
      },
      {
        title: "Accuracy of Results",
        content:
          "Our service is designed to provide accurate and reliable results. However, we do not guarantee the accuracy of the results. You agree that you are solely responsible for the results you obtain from the service.",
      },
      {
        title: "Privacy Policy",
        content:
          "We take your privacy seriously and will not share your personal information with third parties without your consent. However, we may collect anonymous data for the purpose of improving our product and services.",
      },
      {
        title: "Limitation of Liability",
        content:
          "You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of or inability to use the service.",
      },
      {
        title: "Termination",
        content:
          "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      },
      {
        title: "Changes to Terms",
        content:
          "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
      },
    ],
  },
  footerSection: {
    creators: ["Rahul Singh", "Suyash Goylit"],
    creatorSocials: [
      "https://twitter.com/rahool_lol",
      "https://twitter.com/GoylitSuyash",
    ],
    pages: [
      {
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        title: "Terms of Service",
        url: "/terms-of-service",
      },
      {
        title: "Refund Policy",
        url: "/refund-policy",
      },
    ],
  },
};
