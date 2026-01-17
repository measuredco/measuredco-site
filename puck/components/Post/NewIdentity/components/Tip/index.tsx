import Image from "next/image";

import { Heading } from "../../../../../../components";

import "./Tip.css";

interface TipProps {
  description: string;
  image: string;
  title: string;
}

const Tip = ({ description, image, title }: TipProps) => (
  <div className="msrd-NewIdentityTip">
    <div className="msrd-NewIdentityTip-image">
      <Image
        alt=""
        height="119"
        src={`https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/${image}`}
        width="119"
      />
    </div>
    <Heading level="3" size="3">
      {title}
    </Heading>
    <p className="msrd-NewIdentityTip-description msrd-u-prose">
      {description}
    </p>
  </div>
);

export default Tip;
