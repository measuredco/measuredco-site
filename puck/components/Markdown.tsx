import { ComponentConfig } from "@measured/puck";

import {
  Markdown as _Markdown,
  MarkdownProps as _MarkdownProps,
} from "../../components";

export interface MarkdownProps extends _MarkdownProps {
  text: string;
}

export const Markdown: ComponentConfig<MarkdownProps> = {
  defaultProps: {
    align: "left",
    measured: false,
    text: "## Markdown",
  },
  fields: {
    text: { type: "textarea" },
    measured: {
      type: "select",
      options: [
        { label: "Full Width", value: false },
        { label: "Measured", value: true },
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
  render: ({ align, measured, text }) => (
    <_Markdown align={align} measured={measured}>
      {text}
    </_Markdown>
  ),
};
