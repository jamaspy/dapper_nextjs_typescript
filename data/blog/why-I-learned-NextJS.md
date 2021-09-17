---
title: "Why I learned NextJS"
date: "2020-01-01"
exerpt: "I learned NextJS because I wanted to learn a new framework."
description: "I learned NextJS because I wanted to learn a new framework."
tags:
  - react
  - ab testing
---

# Important Things

## Subtitle of things

```js
const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <div className="code-block">
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
}; // end of CodeBlock
```

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
