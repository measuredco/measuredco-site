import Image from "next/image";
import { Heading, Paragraph, Space } from "..";

import "./Profile.css";

export type ProfileProps = {
  description: string;
  image: string;
  link?: string;
  name: string;
  title: string;
};

const Profile = ({ description, image, link, name, title }: ProfileProps) => {
  return (
    <div className="msrd-Profile">
      <div className="msrd-Profile-imageWrapper">
        <Image
          alt=""
          className="msrd-Profile-image"
          height="288"
          src={image}
          width="288"
        />
      </div>
      <div>
        <Paragraph muted size="small">
          {title}
        </Paragraph>
        <Heading level="3" size="2">
          {link ? <a href={link}>{name}</a> : <>{name}</>}
        </Heading>
        <Space size="03" />
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

export default Profile;
