"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

import "./hljs.css";
import "./Markdown.css";

const defaultOptions = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [
      ...(defaultSchema.attributes?.code || []),
      ["className", /^language-./],
    ],
    span: [...(defaultSchema.attributes?.span || []), ["className", /^hljs-./]],
  },
  // Removing clobberPrefix is only safe if authors are trusted!
  // https://github.com/rehypejs/rehype-sanitize#example-headings-dom-clobbering
  clobberPrefix: "",
};

const processMarkdown = (markdown: string, options = defaultOptions) =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkRehype)
    .use(rehypeHighlight)
    // @ts-ignore
    .use(rehypeSanitize, options)
    .use(rehypeStringify)
    .processSync(markdown);

export const Markdown = ({
  align = "left",
  children,
  inline = false,
  measured = false,
  options = defaultOptions,
}) => {
  let Element: any = "div";
  const [textProcessed, setTextProcessed] = useState(
    processMarkdown(children, options)
  );

  if (inline) {
    Element = "span";
  }

  useEffect(() => {
    setTextProcessed(processMarkdown(children, options));
  }, [children]);

  return (
    <Element
      className={classNames({
        "msrd-Markdown": true,
        "msrd-Markdown--inline": inline,
        "msrd-Markdown--measured": measured,
        "msrd-Markdown--center": align === "center",
        "msrd-Markdown--right": align === "right",
      })}
      dangerouslySetInnerHTML={{ __html: textProcessed }}
    />
  );
};
