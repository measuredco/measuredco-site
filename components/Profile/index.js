import Image from "next/image";
import React from "react";

import "./Profile.css";

const Profile = ({
  title,
  image,
  imageVariant,
  description,
  url,
  cta = url,
}) => (
  <div
    className={`msrd-Profile ${
      imageVariant ? `msrd-Profile--${imageVariant}` : ""
    }`}
  >
    <div className="msrd-Profile-content">
      <h3 className="msrd-Profile-title">{title}</h3>
      <p className="msrd-Profile-description">{description}</p>
      {url && (
        <p className="msrd-Profile-url">
          <a href={`https://${url}`} target="_blank">
            {cta}
          </a>
        </p>
      )}
    </div>
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
  </div>
);

export default Profile;
