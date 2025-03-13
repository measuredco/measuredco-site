import Image from "next/image";

import { Rule, Space } from "../../../../../../components";

import "./Aspect.css";

interface AspectProps {
  description: string;
  image: string;
}

const Aspect = ({ description, image }: AspectProps) => (
  <div className="msrd-NewIdentityAspect">
    <div className="msrd-NewIdentity-image">
      <Image
        alt=""
        height="216"
        src={`https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/${image}`}
        width="384"
      />
    </div>
    <div className="msrd-NewIdentityAspect-rule">
      <Space size="06" />
      <Rule />
      <Space size="06" />
    </div>
    <p className="msrd-NewIdentityAspect-description">{description}</p>
  </div>
);

export default Aspect;
