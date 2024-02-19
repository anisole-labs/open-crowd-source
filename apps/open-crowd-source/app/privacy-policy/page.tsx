import { LegalPage, TlegalPageProps } from "@repo/ui/components/legal-page";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Gym Notes",
  keywords: ["gym", "workout", "fitness", "health", "privacy"],
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

export default function PrivacyPolicy() {
  const privacyPolicyContent: TlegalPageProps = {
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
  };

  return <LegalPage {...privacyPolicyContent} />;
}
