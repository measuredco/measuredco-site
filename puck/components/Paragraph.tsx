import { ComponentConfig } from "@measured/puck";

import {
  Paragraph as _Paragraph,
  ParagraphProps as _ParagraphProps,
} from "../../components";

export interface ParagraphProps extends _ParagraphProps {
  text: string;
}

export const Paragraph: ComponentConfig<ParagraphProps> = {
  defaultProps: {
    align: "left",
    size: "",
    text: "Paragraph",
  },
  fields: {
    text: { type: "textarea" },
    size: {
      type: "select",
      options: [
        { label: "Default", value: "" },
        { label: "Small", value: "small" },
        { label: "Large", value: "large" },
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
  },
  render: ({ align, size, text }) => (
    <_Paragraph align={align} size={size}>
      {text}
    </_Paragraph>
  ),
};
