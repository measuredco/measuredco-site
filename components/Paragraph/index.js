import React from "react";

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
      <Markdown inline tagNames={["a", "b", "code", "em", "strong"]}>
        {children}
      </Markdown>
    </p>
  );
};

export default Paragraph;
