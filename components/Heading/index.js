import React from "react";

import "./Heading.css";

const Heading = ({ children, desktopSize, id, level, size, maxWidth }) => {
  let Element = "span";

  if (level) {
    Element = `h${level}`;
  }

  return (
    <Element
      className={`msrd-Heading ${size ? `msrd-Heading--${size}` : ""} ${
        desktopSize ? `msrd-Heading--desktop${desktopSize}` : ""
      }`}
      id={id}
      style={{ maxWidth }}
    >
      {children}
    </Element>
  );
};

export default Heading;
