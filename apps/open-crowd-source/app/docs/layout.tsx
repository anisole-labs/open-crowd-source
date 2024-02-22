import { Metadata } from "next";

import { getDocsLayout } from "@repo/ui/layouts/docs-layout";
import "@repo/ui/mdx.css";

export const metadata: Metadata = {
  title: {
    default: "Docs",
    template: `%s - Docs`,
  },
};

const DocsLayout = getDocsLayout({
  mainNavItems: [
    {
      title: "Getting Started",
      childrenItems: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "External Services",
          href: "/docs/external-services",
        },
      ],
    },
    {
      title: "Setup and Configuration",
      childrenItems: [
        {
          title: "Development Environment",
          href: "/docs/dev-env",
        },
        {
          title: "Local Environment File",
          href: "/docs/local-env-file",
        },
        {
          title: "Customizing the Web Page",
          href: "/docs/customizing-web-page",
        },
        {
          title: "Running the App Locally",
          href: "/docs/running-app-locally",
        },
      ],
    },
    {
      title: "Deployment",
      childrenItems: [
        {
          title: "Deploying to Vercel",
          href: "/docs/deploying-to-vercel",
        },
      ],
    },
  ],
});

export default DocsLayout;
