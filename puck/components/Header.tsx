import { ComponentConfig } from "@measured/puck";

import {
  Heading,
  HeadingProps,
  Paragraph,
  Rule,
  Space,
  SpaceProps,
} from "../../components";

export type HeaderProps = {
  description?: string;
  heading: string;
  level?: HeadingProps["level"];
  size: "m" | "l";
};

const headingSize: Record<HeaderProps["size"], HeadingProps["size"]> = {
  m: "2",
  l: "display1",
};

const spaceSize: Record<HeaderProps["size"], SpaceProps["size"]> = {
  m: "04",
  l: "06",
};

export const Header: ComponentConfig<HeaderProps> = {
  defaultProps: {
    description: "",
    heading: "Heading",
    level: "",
    size: "m",
  },
  fields: {
    heading: { type: "text" },
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
      type: "radio",
      options: [
        { label: "Medium", value: "m" },
        { label: "Large", value: "l" },
      ],
    },
    description: { type: "textarea" },
  },
  label: "Header",
  render: ({ description, heading, level, size }) => (
    <>
      <Heading level={level} size={headingSize[size]}>
        {heading}
      </Heading>
      <Space size={spaceSize[size]} />
      <Rule />
      {description ? (
        <>
          <Space size={spaceSize[size]} />
          <Paragraph prose={false}>{description}</Paragraph>
        </>
      ) : null}
    </>
  ),
};
