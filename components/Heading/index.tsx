import { ReactNode } from "react";

import "./Heading.css";

const Heading = ({
  align,
  children,
  id,
  level,
  maxWidth,
  size,
}: {
  children: ReactNode;
  align?: string;
  id?: string;
  level?: "1" | "2" | "3" | "4" | "5" | "6" | "";
  maxWidth?: string;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "display";
}) => {
  let Element: any = "div";

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
