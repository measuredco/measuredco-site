import { PropsWithChildren } from "react";

import "./Section.css";

export type SectionProps = {
  width?: "default" | "full";
};

const Section = ({ children, width }: PropsWithChildren<SectionProps>) => (
  <section className={`msrd-Section${width ? ` msrd-Section--${width}` : ""}`}>
    {children}
  </section>
);

export default Section;
