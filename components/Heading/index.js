import React from "react";

import "./Heading.css";

const Heading = ({
  children,
  desktopSize,
  id,
  level,
  size,
  maxWidth,
  align,
}) => {
  let Element = "div";

  if (level) {
    Element = `h${level}`;
  }

  return (
    <Element
      className={`msrd-Heading ${size ? `msrd-Heading--${size}` : ""} ${
        desktopSize ? `msrd-Heading--desktop${desktopSize}` : ""
      } ${align ? `msrd-Heading--${align}` : ""}`}
      id={id}
      style={{ maxWidth }}
    >
      {children}
    </Element>
  );
};

export default Heading;
