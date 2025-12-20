"use client";

import classNames from "classnames";
import { ElementType, useEffect, useState } from "react";

import { Logos, logosMapping, Rule, Space } from "..";

import "./Hero.css";

type LogoKey = keyof typeof logosMapping;

export type HeroProps = {
  description: string;
  headingLevel: "1" | "2" | "3" | "4" | "5" | "6" | "";
  logos: { logo: LogoKey; href?: string }[];
  strapline: string;
};

const Hero = ({ description, headingLevel, logos, strapline }: HeroProps) => {
  let StraplineElement: ElementType = "p";
  const [fullscreen, setFullscreen] = useState(false);

  if (headingLevel) {
    StraplineElement = `h${headingLevel}`;
  }

  useEffect(() => {
    const handleResize = () => {
      const hero = document.getElementsByClassName("msrd-Hero-inner")[0];
      const header = document.getElementsByClassName("msrd-SiteHeader")[0];

      if (hero?.scrollHeight <= window.innerHeight - header?.scrollHeight * 2) {
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={classNames({
        "msrd-Hero": true,
        "msrd-Hero--fullscreen": fullscreen,
      })}
    >
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
          {logos?.map((logoKey, index) => {
            const Logo = logosMapping[logoKey.logo];

            if (!Logo) {
              return null;
            }

            return (
              <Logo
                href={logoKey.href}
                key={`${logoKey.logo}-${logoKey.href ?? index}`}
              />
            );
          })}
        </Logos>
      </div>
      <span className="msrd-Hero-arrow">
        <span>↓</span>
      </span>
    </div>
  );
};

export default Hero;
