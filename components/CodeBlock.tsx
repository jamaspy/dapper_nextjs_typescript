import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  language: string;
  value: React.ReactNode;
};

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <div className="code-block">
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};
export default CodeBlock;
