import React from "react";
import { Code, CodeOutput } from "./CodePreview.styled";

export type CodePreviewProps = {
  lines: string[];
};

export const CodePreview = (props: CodePreviewProps) => {
  const { lines } = { ...props };

  return (
    <CodeOutput>
      {lines.map((line) => (
        <Code>{line}</Code>
      ))}
    </CodeOutput>
  );
};
