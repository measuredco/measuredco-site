import Image from "next/image";
import React from "react";

import "./Profile.css";

const Profile = ({
  title,
  subtitle,
  image,
  imageVariant,
  description,
  descriptionSize,
  url,
  cta = url,
  reverse,
  direction = "row",
}) => (
  <div
    className={`msrd-Profile ${
      imageVariant ? `msrd-Profile--${imageVariant}` : ""
    } ${reverse ? `msrd-Profile--reverse` : ""} ${
      direction ? `msrd-Profile--${direction}` : ""
    } ${
      descriptionSize ? `msrd-Profile--descriptionSize${descriptionSize}` : ""
    }`}
  >
    <div className="msrd-Profile-content">
      <h3 className="msrd-Profile-title">{title}</h3>
      {subtitle && <p className="msrd-Profile-subtitle">{subtitle}</p>}
      <p className="msrd-Profile-description">{description}</p>
      {url && (
        <p className="msrd-Profile-url">
          <a href={`https://${url}`} target="_blank">
            {cta}
          </a>
        </p>
      )}
    </div>
    {image && (
      <div className="msrd-Profile-image">
        <Image
          alt=""
          height="450"
          loading="lazy"
          src={`https://res.cloudinary.com/measuredco/dpr_auto,f_auto,q_auto,w_auto/site/${image}`}
          sizes="100vw"
          width="800"
        />
      </div>
    )}
  </div>
);

export default Profile;
