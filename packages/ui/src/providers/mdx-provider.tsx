"use client";

import { mdxCustomComponents } from "@repo/ui/components/mdx";
const MDXProvider = require("@mdx-js/react").MDXProvider;

export function CustomMdxProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={mdxCustomComponents}>{children}</MDXProvider>;
}
