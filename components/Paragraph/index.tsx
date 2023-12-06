import { ReactNode } from "react";
import { defaultSchema } from "rehype-sanitize";

import { Markdown } from "..";

import "./Paragraph.css";

const Paragraph = ({
  align,
  children,
  maxWidth,
  size = "",
}: {
  align?: "left" | "center" | "right";
  children: ReactNode;
  maxWidth?: string;
  size?: "" | "small" | "large";
}) => {
  return (
    <p
      className={`msrd-Paragraph ${size ? `msrd-Paragraph--${size}` : ""} ${
        align ? `msrd-Paragraph--${align}` : ""
      }`}
      style={{ maxWidth }}
    >
      <Markdown
        inline
        sanitizeOptions={{
          ...defaultSchema,
          tagNames: ["a", "b", "code", "del", "em", "strong", "sup"],
        }}
      >
        {children}
      </Markdown>
    </p>
  );
};

export default Paragraph;
