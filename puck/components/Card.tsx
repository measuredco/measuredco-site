import { ComponentConfig } from "@measured/puck";

import { Card as _Card } from "../../components";

export type CardProps = {
  description: string;
  headingLevel: "1" | "2" | "3" | "4" | "5" | "6" | "";
  link: string;
  note: string;
  title: string;
};

export const Card: ComponentConfig<CardProps> = {
  defaultProps: {
    description: "Description",
    headingLevel: "3",
    link: "",
    note: "",
    title: "Card",
  },
  fields: {
    title: {
      type: "text",
    },
    description: {
      type: "textarea",
    },
    link: {
      type: "text",
    },
    note: {
      type: "textarea",
    },
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
  },
  render: ({ description, headingLevel, link, note, title }) => (
    <_Card
      description={description}
      headingLevel={headingLevel}
      link={link}
      note={note}
      title={title}
    />
  ),
};
