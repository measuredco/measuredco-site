import React from "react";

import "./Section.css";

const Section = ({ children, width = "" }) => (
  <section className={`msrd-Section${width ? ` msrd-Section--${width}` : ""}`}>
    <div className="msrd-Section-inner">{children}</div>
  </section>
);

export default Section;
