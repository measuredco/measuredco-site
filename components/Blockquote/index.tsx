"use client";

import classNames from "classnames";
import { PropsWithChildren } from "react";

import { Markdown } from "..";

import "./Blockquote.css";

export type BlockquoteProps = {
  cite?: string;
  measured?: boolean;
};

const Blockquote = ({
  children,
  cite,
  measured,
}: PropsWithChildren<BlockquoteProps>) => (
  <div
    className={classNames({
      "msrd-Blockquote": true,
      "msrd-Blockquote--measured": measured,
    })}
  >
    <blockquote>
      <p className="msrd-Blockquote-quote">
        <Markdown inline>{children}</Markdown>
      </p>
    </blockquote>
    {cite ? (
      <p className="msrd-Blockquote-cite">
        — <Markdown inline>{cite}</Markdown>
      </p>
    ) : null}
  </div>
);

export default Blockquote;
