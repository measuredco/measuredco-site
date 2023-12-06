"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";

import { processMarkdown, sanitizeDefault } from "../../lib/markdown";

import "./hljs.css";
import "./Markdown.css";

const Markdown = ({
  align = "left",
  children,
  inline = false,
  measured = false,
  sanitizeOptions = sanitizeDefault,
}) => {
  let Element: any = "div";
  const [textProcessed, setTextProcessed] = useState(
    processMarkdown(children.toString(), sanitizeOptions)
  );

  if (inline) {
    Element = "span";
  }

  useEffect(() => {
    setTextProcessed(processMarkdown(children.toString(), sanitizeOptions));
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

export default Markdown;
