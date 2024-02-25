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
  shipingAndReturnPolicy: LegalPageProps;

  // footer
  footerSection: SiteFooterProps;
} & GetCrowdsourceHandlerProps;

export const siteConfig: TsiteConfig = {
  name: "Test Open Crowd Source Campaign",
  milestone: {
    amountGoal: 10000,
    date: "2025-01-01",
  },
  metadata: {
    title: {
      default: "Test Campaign",
      template: `%s - Test Campaign`,
    },
    description: "This is a test campaign that showcases open-crowd-source",
    keywords: [
      "test",
      "campaign",
      "open-crowd-source",
      "sharktank",
      "crowdsource",
      "open-source",
      "github",
      "razorpay",
      "nextjs",
    ],
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
    title: "Test Campaign",
    titleSupport: "Project that would change the world",
    description: "This is a test campaign that showcases open-crowd-source",
  },
  featureSection: {
    features: [
      {
        id: "feature-1",
        title: "Feature One",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // images should be 600x600
        // bg color for light mode: #ffffff | 0 0% 100%
        // bg color for dark mode: #09090b | 240 10% 3.9%
        imageLight: "/images/routine-light.png",
        imageDark: "/images/routine-dark.png",
        imageAlt: "alt text for image",
      },
      {
        id: "feature-2",
        title: "Feature Two with Call to Action",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageLight: "/images/track-light.png",
        imageDark: "/images/track-dark.png",
        imageAlt: "Track workout examples",
        layoutReversed: true,
        callToAction: {
          text: "Call to Action",
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      },
    ],
  },
  backUsUpSection: {
    id: "back-us-up",
    title: "Campaign Commentary",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    products: [
      {
        title: "Early Bird - Discount",
        description: "Get the app at a discounted price, forever.",
        originalPrice: "$ 999",
        discountedPrice: "$ 499",
        content:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        buttonLink: "/api/subscribe",
        buttonText: "Become a Founding Member",
        requestBody: {
          productId: "early-bird-discount",
        },
      },
      {
        title: "Early Bird - No Discount",
        description: "Get the app early.",
        discountedPrice: "$ 1499",
        content:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        buttonLink: "/api/subscribe",
        buttonText: "Become a Founding Member",
        requestBody: {
          productId: "early-bird-no-discount",
        },
      },
      {
        title: "Get notified at launch - No price",
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
      "At test-open-crowd-source, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information when you use our product.",
    footer:
      "If you have any questions or concerns about our privacy policy, please contact us at rick@roll.com",
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
      "At test-open-crowd-source, we strive to provide the best possible experience for our users. Nonetheless, if you are not satisfied with our product, here is our refund policy.",
    footer:
      "If you have any questions or concerns about our refund policy, please contact us at rick@roll.com",
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
      "Welcome to test-open-crowd-source! Before you get started, please read our terms of service.",
    footer:
      "If you have any questions or concerns about our terms of service, please contact us at rick@roll.com",
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
  shipingAndReturnPolicy: {
    title: "Shipping and Return Policy",
    description:
      "At test-open-crowd-source, we strive to provide the best possible experience for our users. Nonetheless, if you are not satisfied with our product, here is our shipping and return policy.",
    footer:
      "If you have any questions or concerns about our shipping and return policy, please contact us at rick@roll.com",
    legalContent: [
      {
        title: "Shipping Policy",
        content:
          "All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.",
      },
      {
        title: "Digital Goods",
        content:
          "In case of ordering digital goods, you will receive an email with a link to download the product. If you have any issues with the download, please contact us.",
      },
      {
        title: "Return Policy",
        content:
          "Our Return & Refund Policy provides detailed information about options and procedures for returning your order.",
      },
      {
        title: "International Shipping",
        content:
          "We currently do not ship outside the India. We are working on expanding our shipping capabilities and will update this page once we are ready to ship internationally.",
      },
      {
        title: "Damages",
        content:
          "test-open-crowd-source is not liable for any products damaged or lost during shipping. Nonetheless, if you received your order damaged, please contact our support team directly to file a claim.",
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
      {
        title: "Shipping and Return Policy",
        url: "/shipping-and-return-policy",
      },
    ],
  },
};
