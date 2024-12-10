import { ComponentConfig } from "@measured/puck";

import {
  Heading as _Heading,
  HeadingProps as _HeadingProps,
} from "../../components";

export interface HeadingProps extends _HeadingProps {
  text: string;
}

export const Heading: ComponentConfig<HeadingProps> = {
  fields: {
    text: { type: "text" },
    level: {
      type: "select",
      options: [
        { label: "", value: "" },
        { label: "H1", value: "1" },
        { label: "H2", value: "2" },
        { label: "H3", value: "3" },
        { label: "H4", value: "4" },
        { label: "H5", value: "5" },
        { label: "H6", value: "6" },
      ],
    },
    size: {
      type: "select",
      options: [
        { label: "6", value: "6" },
        { label: "5", value: "5" },
        { label: "4", value: "4" },
        { label: "3", value: "3" },
        { label: "2", value: "2" },
        { label: "1", value: "1" },
        { label: "display3", value: "display3" },
        { label: "display2", value: "display2" },
        { label: "display1", value: "display1" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    anchor: {
      type: "text",
    },
  },
  defaultProps: {
    align: "left",
    anchor: "",
    level: "",
    size: "1",
    text: "Heading",
  },
  render: ({ align, anchor, level, size, text }) => (
    <_Heading align={align} anchor={anchor} level={level} size={size}>
      {text}
    </_Heading>
  ),
};
