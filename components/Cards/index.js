import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { Artifact, Heading, Space } from "../";

import "./Cards.css";

export const Card = ({ artifact, headingLevel, link, title, description }) => {
  const CardElement = link ? Link : "div";

  return (
    <CardElement
      className={classNames({ "msrd-Card": true, ["msrd-Card--link"]: link })}
      href={link}
    >
      <div className="msrd-Card-artifact">
        <Artifact>{artifact}</Artifact>
      </div>
      <Heading level={headingLevel} size="4">
        {title}
      </Heading>
      <Space size="03" />
      <p>{description}</p>
    </CardElement>
  );
};

const Cards = ({ children }) => <div className="msrd-Cards">{children}</div>;

export default Cards;
