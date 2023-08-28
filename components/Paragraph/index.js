import React from "react";

import "./Paragraph.css";
import { Markdown } from "../Markdown";

const Paragraph = ({ children, desktopSize, size = "03", maxWidth, align }) => {
  return (
    <p
      className={`msrd-Paragraph ${size ? `msrd-Paragraph--${size}` : ""} ${
        desktopSize ? `msrd-Paragraph--desktop${desktopSize}` : ""
      } ${align ? `msrd-Paragraph--${align}` : ""}`}
      style={{ maxWidth }}
    >
      <Markdown tagNames={["a", "b", "em", "strong"]}>{children}</Markdown>
    </p>
  );
};

export default Paragraph;
