import { ComponentConfig } from "@measured/puck";

import {
  Banner as _Banner,
  BannerProps as _BannerProps,
} from "../../components";

export type BannerProps = _BannerProps;

export const Banner: ComponentConfig<BannerProps> = {
  defaultProps: {
    alt: "",
    anchor: "C",
    src: "",
  },
  fields: {
    alt: { type: "text" },
    anchor: {
      type: "select",
      options: [
        { label: "C", value: "C" },
        { label: "N", value: "N" },
        { label: "NE", value: "NE" },
        { label: "E", value: "E" },
        { label: "SE", value: "SE" },
        { label: "S", value: "S" },
        { label: "SW", value: "SW" },
        { label: "W", value: "W" },
        { label: "NW", value: "NW" },
      ],
    },
    src: { type: "text" },
  },
  render: ({ alt, anchor = "C", src }) => (
    <_Banner alt={alt} anchor={anchor} src={src} />
  ),
};
