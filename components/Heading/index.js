import React from "react";

import "./Heading.css";

const Heading = ({ children, id, level, size, maxWidth, align }) => {
  let Element = "div";

  if (level) {
    Element = `h${level}`;
  }

  return (
    <Element
      className={`msrd-Heading ${size ? `msrd-Heading--${size}` : ""} ${
        align ? `msrd-Heading--${align}` : ""
      }`}
      id={id}
      style={{ maxWidth }}
    >
      {children}
    </Element>
  );
};

export default Heading;
