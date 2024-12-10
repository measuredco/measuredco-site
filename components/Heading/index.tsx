import { PropsWithChildren } from "react";

import "./Heading.css";

export type HeadingProps = {
  align?: string;
  anchor?: string;
  level?: "1" | "2" | "3" | "4" | "5" | "6" | "";
  size?:
    | "display1"
    | "display2"
    | "display3"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6";
};

const Heading = ({
  align,
  anchor,
  children,
  level,
  size,
}: PropsWithChildren<HeadingProps>) => {
  let Element: any = "div";

  if (level) {
    Element = `h${level}`;
  }

  return (
    <Element
      className={`msrd-Heading ${size ? `msrd-Heading--${size}` : ""} ${
        align ? `msrd-Heading--${align}` : ""
      }`}
      id={anchor}
    >
      {children}
    </Element>
  );
};

export default Heading;
