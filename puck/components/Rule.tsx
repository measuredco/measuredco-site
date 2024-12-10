import { ComponentConfig } from "@measured/puck";

import { Rule as _Rule, RuleProps as _RuleProps } from "../../components";

export type RuleProps = _RuleProps;

export const Rule: ComponentConfig<RuleProps> = {
  defaultProps: {
    align: "left",
  },
  fields: {
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
  },
  label: "Rule",
  render: ({ align }) => <_Rule align={align} />,
};
