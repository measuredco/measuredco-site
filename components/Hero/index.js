import React from "react";

import "./Hero.css";

const Hero = ({ description, headingLevel, strapline }) => {
  let StraplineElement = "p";

  if (headingLevel) {
    StraplineElement = `h${headingLevel}`;
  }

  return (
    <div className="msrd-Hero">
      <StraplineElement className="msrd-Hero-strapline">
        {strapline}
      </StraplineElement>
      <hr className="msrd-Hero-divider" />
      <p className="msrd-Hero-description">{description}</p>
      <p className="msrd-Hero-callToAction">
        <a className="msrd-Hero-callToActionLink" href="#contact">
          Get in touch
        </a>
      </p>
    </div>
  );
};

export default Hero;
