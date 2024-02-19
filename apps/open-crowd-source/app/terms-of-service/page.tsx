import { LegalPage, TlegalPageProps } from "@repo/ui/components/legal-page";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Gym Notes",
  keywords: ["gym", "workout", "fitness", "health", "terms", "service"],
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
};

export default function TermsOfService() {
  const termsOfServiceContent: TlegalPageProps = {
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
  };

  return <LegalPage {...termsOfServiceContent} />;
}
