import React from "react";

import "./Paragraph.css";

const Paragraph = ({ children, desktopSize, size = "03", maxWidth }) => {
  return (
    <p
      className={`msrd-Paragraph ${size ? `msrd-Paragraph--${size}` : ""} ${
        desktopSize ? `msrd-Paragraph--desktop${desktopSize}` : ""
      }`}
      style={{ maxWidth }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
