"use client";

import classNames from "classnames";
import type { Schema } from "hast-util-sanitize";
import { useRouter } from "next/navigation";
import {
  ElementType,
  MouseEvent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import { processMarkdown, sanitizeDefault } from "../../lib/markdown";

import "./hljs.css";
import "./Markdown.css";

export type MarkdownProps = {
  align?: "left" | "center" | "right";
  inline?: boolean;
  measured?: boolean;
  sanitizeOptions?: Schema;
};

const Markdown = ({
  align = "left",
  children,
  inline = false,
  measured = false,
  sanitizeOptions = sanitizeDefault,
}: PropsWithChildren<MarkdownProps>) => {
  let Element: ElementType = "div";
  const router = useRouter();
  const [textProcessed, setTextProcessed] = useState(
    processMarkdown(children?.toString(), sanitizeOptions)
  );

  if (inline) {
    Element = "span";
  }

  useEffect(() => {
    setTextProcessed(processMarkdown(children?.toString(), sanitizeOptions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      onClick={(event: MouseEvent) => {
        const element = event.target as HTMLElement;

        if (element && element.tagName === "A") {
          const href = element.getAttribute("href");

          if (href && href.startsWith("/")) {
            event.preventDefault();
            router.push(href);
          }
        }
      }}
    />
  );
};

export default Markdown;
