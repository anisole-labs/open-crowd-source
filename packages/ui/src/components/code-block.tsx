import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { CopyButton } from "@ui/components/copy-button";
import { Card } from "@ui/components/ui/card";
import { cn } from "@ui/lib/utils";

type GetCodeBlockProps = {
  language: string;
  showLineNumbers?: boolean;
  className?: string;
  code: string;
};

export const CodeBlock = (props: GetCodeBlockProps) => {
  return (
    <Card className={cn("relative mt-2 mb-8", props.className)}>
      <SyntaxHighlighter
        language={props.language}
        style={vscDarkPlus}
        showLineNumbers={props.showLineNumbers}
        customStyle={{
          padding: "1rem",
          margin: 0,
          borderRadius: "0.375rem",
        }}
        className="rounded-md"
      >
        {props.code}
      </SyntaxHighlighter>
      <CopyButton value={props.code} className="absolute top-2 right-2" />
    </Card>
  );
};
