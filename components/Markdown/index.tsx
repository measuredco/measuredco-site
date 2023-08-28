import { useEffect, useState } from "react";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

import "./Markdown.css";

const defaultTagNames = [
  "b",
  "strong",
  "em",
  "a",
  "p",
  "br",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "ul",
  "ol",
  "li",
  "img",
];

const processMarkdown = (markdown: string, tagNames = defaultTagNames) =>
  unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize, {
      tagNames,
    })
    .use(rehypeStringify)
    .processSync(markdown);

export const Markdown = ({
  align = "left",
  children,
  tagNames = defaultTagNames,
  maxWidth,
}) => {
  const [textProcessed, setTextProcessed] = useState(
    processMarkdown(children, tagNames)
  );

  useEffect(() => {
    setTextProcessed(processMarkdown(children, tagNames));
  }, [children]);

  return (
    <div
      className={`msrd-Markdown${align ? ` msrd-Markdown--${align}` : ""}`}
      dangerouslySetInnerHTML={{ __html: textProcessed }}
      style={{ maxWidth }}
    />
  );
};
