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
      ],
    },
  ],
});

export default DocsLayout;
