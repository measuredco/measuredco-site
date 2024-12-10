import classNames from "classnames";
import { PropsWithChildren } from "react";
import { defaultSchema } from "rehype-sanitize";

import { Markdown } from "..";

import "./Paragraph.css";

export type ParagraphProps = {
  align?: "left" | "center" | "right";
  measured?: boolean;
  muted?: boolean;
  size?: "" | "small" | "large";
};

const Paragraph = ({
  align,
  children,
  measured,
  muted,
  size = "",
}: PropsWithChildren<ParagraphProps>) => (
  <p
    className={classNames({
      "msrd-Paragraph": true,
      "msrd-Paragraph--measured": measured,
      "msrd-Paragraph--muted": muted,
      [`msrd-Paragraph--${size}`]: size,
      [`msrd-Paragraph--${align}`]: align && align !== "left",
    })}
  >
    <Markdown
      inline
      sanitizeOptions={{
        ...defaultSchema,
        tagNames: ["a", "b", "br", "code", "del", "em", "strong", "sup"],
      }}
    >
      {children}
    </Markdown>
  </p>
);

export default Paragraph;
