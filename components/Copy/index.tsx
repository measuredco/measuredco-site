"use client";

import { useState } from "react";

import "./Copy.css";

export type CopyProps = {
  text: string;
};

const Copy = ({ text }: CopyProps) => {
  const [label, setLabel] = useState("Copy");
  return (
    <button
      className="msrd-Copy"
      onBlur={async () => {
        setLabel("Copy");
      }}
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setLabel("Copied");
      }}
      onMouseLeave={async () => {
        setLabel("Copy");
      }}
    >
      <span className="msrd-Copy-text">{label}</span>
    </button>
  );
};

export default Copy;
