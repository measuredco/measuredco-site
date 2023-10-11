import classNames from "classnames";
import { useEffect, useState } from "react";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

import "./Markdown.css";

const defaultTagNames = [
  "a",
  "blockquote",
  "code",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "img",
  "li",
  "ol",
  "p",
  "strong",
  "ul",
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
  inline = false,
  measured = false,
  tagNames = defaultTagNames,
}) => {
  let Element: any = "div";
  const [textProcessed, setTextProcessed] = useState(
    processMarkdown(children, tagNames)
  );

  if (inline) {
    Element = "span";
  }

  useEffect(() => {
    setTextProcessed(processMarkdown(children, tagNames));
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
