import React from "react";
import { defaultSchema } from "rehype-sanitize";

import "./Paragraph.css";
import { Markdown } from "../Markdown";

const Paragraph = ({ children, size = null, maxWidth, align }) => {
  return (
    <p
      className={`msrd-Paragraph ${size ? `msrd-Paragraph--${size}` : ""} ${
        align ? `msrd-Paragraph--${align}` : ""
      }`}
      style={{ maxWidth }}
    >
      <Markdown
        inline
        options={{
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
