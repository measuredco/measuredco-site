import type { Config, Data, DefaultRootProps } from "@measured/puck";

import { Page } from "../components";

/*
 * Renamed components
 *
 * Divider > Rule
 *
 */

import { Archive, ArchiveProps } from "./components/Archive";
import { Banner, BannerProps } from "./components/Banner";
import { Card, CardProps } from "./components/Card";
import { Contact, ContactProps } from "./components/Contact";
import { Rule, RuleProps } from "./components/Rule";
import { Grid, GridItem, GridProps, GridItemProps } from "./components/Grid";
import { Heading, HeadingProps } from "./components/Heading";
import { Hero, HeroProps } from "./components/Hero";
import { Image, ImageProps } from "./components/Image";
import { Markdown, MarkdownProps } from "./components/Markdown";
import { Paragraph, ParagraphProps } from "./components/Paragraph";
import { Post, PostProps } from "./components/Post";
import { Profile, ProfileProps } from "./components/Profile";
import { Section, SectionProps } from "./components/Section";
import { Space, SpaceProps } from "./components/Space";

export type Props = {
  Archive: ArchiveProps;
  Banner: BannerProps;
  Card: CardProps;
  Contact: ContactProps;
  Divider: RuleProps;
  Grid: GridProps;
  GridItem: GridItemProps;
  Heading: HeadingProps;
  Hero: HeroProps;
  Image: ImageProps;
  Markdown: MarkdownProps;
  Post: PostProps;
  Paragraph: ParagraphProps;
  Profile: ProfileProps;
  Section: SectionProps;
  Space: SpaceProps;
};

type RootProps = {
  headerLinks: { current: boolean; href: string; label: string }[];
  ogImage: { alt: string; type: string; url: string };
  description: string;
} & DefaultRootProps;

export type UserData = Data<Props, RootProps>;

export const config: Config<Props, RootProps> = {
  categories: {
    template: {
      components: ["Archive", "Post"],
    },
    layout: {
      components: ["Grid", "GridItem", "Section", "Space"],
    },
    typographic: {
      components: ["Heading", "Markdown", "Paragraph", "Divider"],
    },
  },
  components: {
    Archive,
    Banner,
    Card,
    Contact,
    Divider: Rule,
    Grid,
    GridItem,
    Heading,
    Hero,
    Image,
    Markdown,
    Paragraph,
    Post,
    Profile,
    Section,
    Space,
  },
  root: {
    defaultProps: {
      title: "",
      description: "",
      ogImage: { alt: "", type: "", url: "" },
      headerLinks: [
        {
          current: false,
          href: "/about",
          label: "About",
        },
        {
          current: false,
          href: "/work",
          label: "Work",
        },
        {
          current: true,
          href: "/blog",
          label: "Blog",
        },
        {
          current: false,
          href: "/contact",
          label: "Get in touch",
        },
      ],
    },
    fields: {
      title: {
        type: "text",
      },
      description: {
        type: "textarea",
      },
      ogImage: {
        type: "object",
        objectFields: {
          url: {
            type: "text",
          },
          alt: {
            type: "text",
          },
          type: {
            type: "text",
          },
        },
      },
      headerLinks: {
        type: "array",
        arrayFields: {
          current: {
            type: "select",
            options: [
              { label: "Default", value: false },
              { label: "Current page", value: true },
            ],
          },
          href: {
            type: "text",
          },
          label: {
            type: "text",
          },
        },
        defaultItemProps: {
          current: false,
          href: "/",
          label: "Page",
        },
        getItemSummary: (item) => item.label,
      },
    },
    render: ({ headerLinks = [], puck: { renderDropZone } }) => {
      return (
        <Page headerLinks={headerLinks}>
          {renderDropZone({
            disallow: ["GridItem"],
            zone: "default-zone",
          })}
        </Page>
      );
    },
  },
};

export default config;
