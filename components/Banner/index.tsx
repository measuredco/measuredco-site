import { StaticImageData } from "next/image";

import { Image } from "..";

import "./Banner.css";

export type BannerProps = {
  alt: string;
  anchor?: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW" | "C";
  src: string | StaticImageData;
};

const Banner = ({ alt, anchor, src }: BannerProps) => {
  return (
    <div className="msrd-Banner">
      <Image alt={alt} anchor={anchor} fit="cover" priority src={src} />
    </div>
  );
};

export default Banner;
