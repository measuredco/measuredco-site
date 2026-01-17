"use client";

import classNames from "classnames";
import { PropsWithChildren } from "react";

import { Markdown } from "..";

import "./Paragraph.css";

export type ParagraphProps = {
  align?: "left" | "center" | "right";
  measured?: boolean;
  muted?: boolean;
  prose?: boolean;
  size?: "" | "small" | "large";
};

const Paragraph = ({
  align,
  children,
  measured,
  muted,
  prose = true,
  size = "",
}: PropsWithChildren<ParagraphProps>) => (
  <p
    className={classNames({
      "msrd-Paragraph": true,
      "msrd-Paragraph--measured": measured,
      "msrd-Paragraph--muted": muted,
      "msrd-Paragraph--prose": prose,
      [`msrd-Paragraph--${size}`]: size,
      [`msrd-Paragraph--${align}`]: align && align !== "left",
    })}
  >
    <Markdown inline>{children}</Markdown>
  </p>
);

export default Paragraph;
