import React from "react";

import "./Paragraph.css";

const Paragraph = ({ children, desktopSize, size = "03" }) => {
  return (
    <p
      className={`msrd-Paragraph ${size ? `msrd-Paragraph--${size}` : ""} ${
        desktopSize ? `msrd-Paragraph--desktop${desktopSize}` : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
