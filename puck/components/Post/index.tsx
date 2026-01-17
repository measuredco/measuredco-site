import { ComponentConfig } from "@measured/puck";

import {
  Rule,
  Grid,
  Heading,
  Markdown,
  Paragraph,
  Section,
  Space,
} from "../../../components";

import NewIdentity from "./NewIdentity";

export type PostProps = {
  author: string;
  authorUrl: string;
  content: string;
  date: string;
  modifiedDate: string;
  standfirst: string;
  template?: "new-visual-identity" | "";
  title: string;
};

export const Post: ComponentConfig<PostProps> = {
  defaultProps: {
    author: "Paul Love",
    authorUrl: "https://www.linkedin.com/in/paullove/",
    content: "",
    date: new Date().toISOString().split("T")[0],
    modifiedDate: "",
    standfirst: "",
    title: "Title",
  },
  fields: {
    title: { type: "text" },
    date: { type: "text" },
    modifiedDate: { type: "text" },
    author: { type: "text" },
    authorUrl: { type: "text" },
    standfirst: { type: "text" },
    content: { type: "textarea" },
    template: {
      type: "select",
      options: [
        { label: "Default", value: "true" },
        { label: "New Visual Identity", value: "new-visual-identity" },
      ],
    },
  },
  render: ({
    author,
    authorUrl,
    content,
    date,
    modifiedDate,
    standfirst,
    template,
    title,
  }) => {
    if (!template) {
      return (
        <Section>
          <Grid>
            <Grid.Item colSpan="7" colStart="3" colSpanNarrow="11">
              <Space size="08" />
              <Heading level="1" size="1">
                {title}
              </Heading>
              <Space size="05" />
              <Paragraph prose={false} size="small">{`${date} ${
                modifiedDate ? ` _(updated ${modifiedDate})_` : ""
              } • ${
                authorUrl ? `[${author}](${authorUrl})` : author
              }`}</Paragraph>
              <Space size="05" />
              {standfirst ? (
                <>
                  <Paragraph measured prose={false} size="large">
                    {standfirst}
                  </Paragraph>
                  <Space size="06" />
                  <Rule />
                  <Space size="06" />
                </>
              ) : (
                ""
              )}
              <Markdown measured>{content}</Markdown>
              <Space size="12" />
            </Grid.Item>
          </Grid>
        </Section>
      );
    }
    if (template === "new-visual-identity") {
      return (
        <NewIdentity
          author={author}
          authorUrl={authorUrl}
          date={date}
          modifiedDate={modifiedDate}
          standfirst={standfirst}
          title={title}
        />
      );
    }
  },
};
