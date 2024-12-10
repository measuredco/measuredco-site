import React from "react";

import { Rule, Logos, logosMapping, Space } from "..";

import "./Hero.css";

export type HeroProps = {
  description: string;
  headingLevel: "1" | "2" | "3" | "4" | "5" | "6" | "";
  logos: { logo: any }[];
  strapline: string;
};

const Hero = ({ description, headingLevel, logos, strapline }: HeroProps) => {
  let StraplineElement = "p" as any;

  if (headingLevel) {
    StraplineElement = `h${headingLevel}`;
  }

  return (
    <div className="msrd-Hero">
      <div className="msrd-Hero-inner">
        <div className="msrd-Hero-text">
          <StraplineElement className="msrd-Hero-strapline">
            {strapline}
          </StraplineElement>
          <div className="msrd-Hero-rule">
            <Rule align="center" />
          </div>
          <p className="msrd-Hero-description">{description}</p>
        </div>
        <Space size="09" />
        <Logos>
          {logos.map((logoKey, index) => {
            const Logo = logosMapping[logoKey.logo];

            return <Logo key={`${logoKey}-${index}`} />;
          })}
        </Logos>
      </div>
    </div>
  );
};

export default Hero;
