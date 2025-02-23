"use client";

import classNames from "classnames";
import { useRef, useState } from "react";

import "./Copy.css";

export type CopyProps = {
  text: string;
};

const Copy = ({ text }: CopyProps) => {
  const timeout = useRef(null);
  const [label, setLabel] = useState("Copy");
  const [touched, setTouched] = useState(false);

  return (
    <button
      className={classNames({
        "msrd-Copy": true,
        "msrd-Copy--touched": touched,
      })}
      onBlur={() => {
        if (timeout.current) {
          clearTimeout(timeout.current);
          timeout.current = null;
        }
        setTouched(false);
        setLabel("Copy");
      }}
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setLabel("Copied");
      }}
      onMouseLeave={() => {
        setLabel("Copy");
      }}
      onTouchEnd={() => {
        if (timeout.current) {
          clearTimeout(timeout.current);
          timeout.current = null;
        }
        setTouched(true);
        timeout.current = setTimeout(() => {
          setTouched(false);
          setLabel("Copy");
        }, 2000);
      }}
    >
      <span aria-live="polite" className="msrd-Copy-text">
        {label}
      </span>
    </button>
  );
};

export default Copy;
