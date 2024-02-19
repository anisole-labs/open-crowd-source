import { LegalPage, TlegalPageProps } from "@repo/ui/components/legal-page";

export const metadata = {
  title: "Refund Policy",
  description: "Refund Policy for Gym Notes",
  keywords: ["gym", "workout", "fitness", "health", "refund"],
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

export default function RefundPolicy() {
  const refundPolicyContent: TlegalPageProps = {
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
  };

  return <LegalPage {...refundPolicyContent} />;
}
