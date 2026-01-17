import { ComponentConfig } from "@measured/puck";

import {
  Banner,
  BannerProps,
  Date,
  Grid,
  Heading,
  Markdown,
  Paragraph,
  Rule,
  Section,
  Space,
} from "../../components";

export type WorkProps = {
  content: string;
  date: string;
  image: BannerProps;
  quote: string;
  standfirst: string;
  title: string;
};

export const Work: ComponentConfig<WorkProps> = {
  defaultProps: {
    content: "",
    date: "",
    image: {
      alt: "",
      anchor: "C",
      src: "",
    },
    quote: "",
    standfirst: "Standfirst",
    title: "Title",
  },
  fields: {
    title: { type: "text" },
    standfirst: { type: "text" },
    date: { type: "text" },
    image: {
      type: "object",
      objectFields: {
        alt: { type: "text" },
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
        src: { type: "text" },
      },
    },
    quote: { type: "textarea" },
    content: { type: "textarea" },
  },
  render: ({ content, date, image, standfirst, title }) => {
    return (
      <>
        <Space size="09" />
        <Section>
          <Grid>
            <Grid.Item colSpan="5" colSpanNarrow="7">
              <Heading level="1" size="display1">
                {title}
              </Heading>
              <Space size="06" />
              <Rule />
              <Space size="06" />
              <Paragraph>{standfirst}</Paragraph>
            </Grid.Item>
            <Grid.Item
              align="end"
              colSpan="2"
              colSpanNarrow="3"
              colStart="9"
              colStartNarrow="9"
              justify="end"
            >
              <Date>{date}</Date>
            </Grid.Item>
          </Grid>
          <Space size="06" />
        </Section>
        <Banner alt={image.alt} anchor={image.anchor} src={image.src} />
        <Space size="06" />
        <Section>
          <Grid>
            <Grid.Item colSpan="7" colSpanNarrow="11" colStart="3">
              <Markdown measured>{content}</Markdown>
            </Grid.Item>
          </Grid>
        </Section>
        <Space size="12" />
      </>
    );
  },
};
