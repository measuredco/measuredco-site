import { ComponentConfig } from "@measured/puck";

import { Image as _Image, ImageProps as _ImageProps } from "../../components";

export type ImageProps = _ImageProps;

export const Image: ComponentConfig<ImageProps> = {
  defaultProps: {
    alt: "",
    anchor: "C",
    aspectRatio: "",
    fit: "",
    height: 84,
    priority: false,
    sizes: "",
    src: "",
    width: 84,
  },
  fields: {
    alt: { type: "text" },
    aspectRatio: { type: "text" },
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
    fit: {
      type: "select",
      options: [
        { label: "Default", value: "" },
        { label: "Cover", value: "cover" },
      ],
    },
    height: { type: "number" },
    priority: {
      type: "select",
      options: [
        { label: "Default", value: false },
        { label: "Prioritised", value: true },
      ],
    },
    sizes: { type: "text" },
    src: { type: "text" },
    width: { type: "number" },
  },
  render: ({
    alt,
    anchor = "C",
    aspectRatio,
    fit,
    height,
    priority,
    sizes,
    src,
    width,
  }) => (
    <_Image
      alt={alt}
      aspectRatio={aspectRatio}
      anchor={anchor}
      fit={fit}
      height={height}
      priority={priority}
      sizes={sizes}
      src={src}
      width={width}
    />
  ),
};
