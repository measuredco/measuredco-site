import React from "react";

import { Artifact, Heading, Space } from "../";

import "./Cards.css";

export const Card = ({ artifact, title, description }) => {
  return (
    <div className="msrd-Card">
      <Artifact>{artifact}</Artifact>
      <Heading level="3" size="05">
        {title}
      </Heading>
      <Space size="03" />
      <p>{description}</p>
    </div>
  );
};

const Cards = ({ children }) => <div className="msrd-Cards">{children}</div>;

export default Cards;