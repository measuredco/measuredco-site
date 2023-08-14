import React from "react";

import "./Heading.css";

const Heading = ({ children, desktopSize, level, size }) => {
  let Element = "span";

  if (level) {
    Element = `h${level}`;
  }

  return (
    <Element
      className={`msrd-Heading ${size ? `msrd-Heading--${size}` : ""} ${
        desktopSize ? `msrd-Heading--desktop${desktopSize}` : ""
      }`}
    >
      {children}
    </Element>
  );
};

export default Heading;
