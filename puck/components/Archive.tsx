import { ComponentConfig } from "@measured/puck";

import { Card, Grid, Section } from "../../components";

export type ArchiveProps = {
  headingLevel?: "1" | "2" | "3" | "4" | "5" | "6" | "";
  posts: {
    author: string;
    date: string;
    graphic: boolean;
    slug: string;
    title: string;
  }[];
};

export const Archive: ComponentConfig<ArchiveProps> = {
  defaultProps: {
    headingLevel: "2",
    posts: [
      {
        author: "Author",
        date: new Date().toISOString().split("T")[0],
        graphic: false,
        slug: "blog-post",
        title: "Blog Post",
      },
    ],
  },
  fields: {
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
    posts: {
      type: "array",
      arrayFields: {
        title: {
          type: "text",
        },
        slug: {
          type: "text",
        },
        date: {
          type: "text",
        },
        author: {
          type: "text",
        },
        graphic: {
          type: "radio",
          options: [
            { label: "true", value: true },
            { label: "false", value: false },
          ],
        },
      },
      defaultItemProps: {
        author: "Author",
        date: new Date().toISOString().split("T")[0],
        graphic: false,
        slug: "blog-post",
        title: "Blog Post",
      },
      getItemSummary: (item) => item.title,
    },
  },
  render: ({ headingLevel, posts }) => (
    <Section>
      <Grid gap="large">
        {posts.map((post, index) => (
          <Grid.Item colSpan="4" colSpanNarrow="6" key={index}>
            <Card
              description={`${post.date} • ${post.author}`}
              graphic={post.graphic}
              headingLevel={headingLevel}
              link={`/blog/${post.slug}`}
              note="Read"
              title={post.title}
            />
          </Grid.Item>
        ))}
      </Grid>
    </Section>
  ),
};
