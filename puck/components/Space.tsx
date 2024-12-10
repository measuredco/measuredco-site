import { ComponentConfig } from "@measured/puck";

import { Space as _Space, SpaceProps as _SpaceProps } from "../../components";

export type SpaceProps = _SpaceProps;

export const Space: ComponentConfig<SpaceProps> = {
  defaultProps: {
    size: "05",
  },
  fields: {
    size: {
      options: [
        { label: "01", value: "01" },
        { label: "02", value: "02" },
        { label: "03", value: "03" },
        { label: "04", value: "04" },
        { label: "05", value: "05" },
        { label: "06", value: "06" },
        { label: "07", value: "07" },
        { label: "08", value: "08" },
        { label: "09", value: "09" },
        { label: "10", value: "10" },
        { label: "11", value: "11" },
        { label: "12", value: "12" },
      ],
      type: "select",
    },
  },
  render: ({ size }) => <_Space size={size} />,
};
