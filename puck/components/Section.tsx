import { ComponentConfig } from "@measured/puck";
import { ReactNode } from "react";

import {
  Section as _Section,
  SectionProps as _SectionProps,
} from "../../components";

export type SectionProps = _SectionProps;

export const Section: ComponentConfig<SectionProps> = {
  defaultProps: {
    width: "default",
  },
  fields: {
    width: {
      options: [
        { label: "Default", value: "default" },
        { label: "Full", value: "full" },
      ],
      type: "select",
    },
  },
  render: ({ width, puck: { renderDropZone } }) => (
    <_Section width={width}>
      {renderDropZone({ zone: "section" }) as ReactNode}
    </_Section>
  ),
};
