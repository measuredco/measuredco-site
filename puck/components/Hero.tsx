import { ComponentConfig } from "@measured/puck";

import {
  Hero as _Hero,
  HeroProps as _HeroProps,
  logosMapping,
} from "../../components";

export type HeroProps = _HeroProps;

export const Hero: ComponentConfig<HeroProps> = {
  defaultProps: {
    description: "description",
    headingLevel: "",
    logos: [{ logo: "bt" as any }],
    strapline: "strapline",
  },
  fields: {
    strapline: { type: "textarea" },
    description: { type: "textarea" },
    headingLevel: {
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
    logos: {
      type: "array",
      arrayFields: {
        logo: {
          type: "select",
          options: Object.keys(logosMapping).map((logoKey) => ({
            label: logoKey,
            value: logoKey,
          })),
        },
      },
      defaultItemProps: {
        logo: "bt" as any,
      },
      getItemSummary: (item) => item.logo as unknown as string,
    },
  },
  render: ({ description, headingLevel, logos, strapline }) => (
    <_Hero
      description={description}
      headingLevel={headingLevel}
      logos={logos}
      strapline={strapline}
    />
  ),
};
