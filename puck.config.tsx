import type { Config, Data, DefaultRootProps, Fields } from "@measured/puck";

import {
  Base,
  Button,
  Card,
  Cards,
  Contact,
  Footer,
  Header,
  Heading,
  Hero,
  Logos,
  Markdown,
  Paragraph,
  Profile,
  ProfileDeck,
  Section,
  Space,
  Technologies,
} from "./components";

import { logosMapping } from "./components/Logos";

type ProfileProps = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  descriptionSize: "" | "small" | "large";
  url: string;
  cta: string;
  imageVariant: "" | "round";
  reverse: boolean;
  direction: "row" | "column";
};

export type Props = {
  Archive: {
    posts: {
      author: string;
      date: string;
      slug: string;
      title: string;
    }[];
  };
  Button: { href: string; label: string };
  Contact: {};
  Clients: {
    logos: { logo: [keyof typeof logosMapping] }[];
  };
  Heading: {
    level: "1" | "2" | "3" | "4" | "5" | "6" | "";
    size: "1" | "2" | "3" | "4" | "5" | "6" | "display";
    text: string;
    id: string;
    maxWidth: string;
    align: "left" | "center" | "right";
  };
  Hero: {
    strapline: string;
    description: string;
    headingLevel: "1" | "2" | "3" | "4" | "5" | "6" | "";
  };
  Markdown: {
    text: string;
    align: "left" | "center" | "right";
    measured: boolean;
  };
  Post: {
    author: string;
    authorUrl: string;
    content: string;
    date: string;
    modifiedDate: string;
    title: string;
  };
  Paragraph: {
    size: "" | "small" | "large";
    text: string;
    maxWidth: string;
    align: "left" | "center" | "right";
  };
  Profile: ProfileProps;
  ProfileDeck: { profiles: ProfileProps[] };
  CardDeck: {
    cards: {
      artifact: string;
      headingLevel: "1" | "2" | "3" | "4" | "5" | "6" | "";
      link: string;
      title: string;
      description: string;
    }[];
  };
  Space: {
    size:
      | "01"
      | "02"
      | "03"
      | "04"
      | "05"
      | "06"
      | "07"
      | "08"
      | "09"
      | "10"
      | "11"
      | "12";
  };
  Technologies: {};
};

type RootProps = {
  headerLinks: { current: boolean; href: string; label: string }[];
  ogImage: { alt: string; type: string; url: string };
  description: string;
} & DefaultRootProps;

export type UserData = Data<Props, RootProps>;

const profileFields: Fields<ProfileProps> = {
  title: { type: "text" },
  subtitle: { type: "text" },
  description: { type: "textarea" },
  descriptionSize: {
    type: "select",
    options: [
      { label: "Default", value: "" },
      { label: "Small", value: "small" },
      { label: "Large", value: "large" },
    ],
  },
  image: { type: "text" },
  imageVariant: {
    type: "radio",
    options: [
      { label: "Square", value: "" },
      { label: "Round", value: "round" },
    ],
  },
  url: { type: "text" },
  cta: { type: "text" },
  reverse: {
    type: "radio",
    label: "order",
    options: [
      { label: "Normal", value: false },
      { label: "Reverse", value: true },
    ],
  },
  direction: {
    type: "radio",
    options: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" },
    ],
  },
};

const defaultProfileProps: ProfileProps = {
  title: "Title",
  subtitle: "",
  image: "Screenshot-BT-01_jpqlkt.tiff",
  imageVariant: "",
  description: "Description",
  descriptionSize: "",
  url: "example.com",
  cta: "example.com",
  reverse: false,
  direction: "row",
};

export const config: Config<Props, RootProps> = {
  root: {
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
            type: "radio",
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
          href: "#",
          label: "Page",
        },
        getItemSummary: (item) => item.label,
      },
    },
    render: ({ children, headerLinks = [] }) => {
      return (
        <Base>
          <Header links={headerLinks} />
          <main>{children}</main>
          <Footer />
        </Base>
      );
    },
  },
  components: {
    Archive: {
      fields: {
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
          },
          defaultItemProps: {
            author: "Author",
            date: new Date().toISOString().split("T")[0],
            slug: "blog-post",
            title: "Blog Post",
          },
          getItemSummary: (item) => item.title,
        },
      },
      defaultProps: {
        posts: [
          {
            author: "Author",
            date: new Date().toISOString().split("T")[0],
            slug: "blog-post",
            title: "Blog Post",
          },
        ],
      },
      render: ({ posts }) => (
        <Section>
          <Cards>
            {posts.map((post, idx) => (
              <Card
                artifact="🡒"
                description={`${post.date} • ${post.author}`}
                headingLevel={2}
                link={`/blog/${post.slug}`}
                title={post.title}
                key={idx}
              />
            ))}
          </Cards>
        </Section>
      ),
    },
    Button: {
      fields: {
        href: { type: "text" },
        label: { type: "text" },
      },
      defaultProps: { href: "#", label: "Button" },
      render: ({ href, label }) => (
        <Section>
          <Button href={href} label={label} />
        </Section>
      ),
    },
    Contact: {
      render: () => (
        <Section>
          <Contact />
        </Section>
      ),
    },
    CardDeck: {
      fields: {
        cards: {
          type: "array",
          arrayFields: {
            artifact: {
              type: "select",
              options: [
                {
                  label: "hash #",
                  value: "#",
                },
                {
                  label: "diamond",
                  value: "",
                },
                {
                  label: "sun ☼",
                  value: "☼",
                },
                {
                  label: "ui ⬒",
                  value: "⬒",
                },
                {
                  label: "arrow 🡒",
                  value: "🡒",
                },
              ],
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
            link: {
              type: "text",
            },
            title: {
              type: "text",
            },
            description: {
              type: "textarea",
            },
          },
          defaultItemProps: {
            artifact: "#",
            headingLevel: "3",
            link: "",
            title: "Card",
            description: "Description",
          },
          getItemSummary: (item) => item.title,
        },
      },
      defaultProps: {
        cards: [
          {
            artifact: "#",
            headingLevel: "3",
            link: "",
            title: "Card",
            description: "Description",
          },
        ],
      },
      render: ({ cards }) => (
        <Section>
          <Cards>
            {cards.map((card, idx) => (
              <Card
                artifact={card.artifact}
                headingLevel={card.headingLevel}
                link={card.link}
                title={card.title}
                description={card.description}
                key={idx}
              />
            ))}
          </Cards>
        </Section>
      ),
    },
    Clients: {
      fields: {
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
      defaultProps: {
        logos: [{ logo: "bt" as any }],
      },
      render: ({ logos }) => (
        <Section>
          <h2 className="msrd-u-visuallyHidden">Clients</h2>
          <Logos>
            {logos.map((logoKey, idx) => {
              const Logo = logosMapping[logoKey.logo];

              return <Logo key={`${logoKey}-${idx}`} />;
            })}
          </Logos>
        </Section>
      ),
    },
    Heading: {
      fields: {
        text: { type: "text" },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        size: {
          type: "select",
          options: [
            { label: "6", value: "6" },
            { label: "5", value: "5" },
            { label: "4", value: "4" },
            { label: "3", value: "3" },
            { label: "2", value: "2" },
            { label: "1", value: "1" },
            { label: "display", value: "display" },
          ],
        },
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
        id: {
          type: "text",
        },
        maxWidth: {
          type: "text",
        },
      },
      defaultProps: {
        level: "",
        size: "1",
        text: "Heading",
        id: "",
        maxWidth: "",
        align: "left",
      },
      render: ({ level, size, text, id, maxWidth, align }) => (
        <Section>
          <Heading
            level={level}
            size={size}
            id={id}
            maxWidth={maxWidth}
            align={align}
          >
            {text}
          </Heading>
        </Section>
      ),
    },
    Hero: {
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
      },
      render: ({
        description = "description",
        headingLevel,
        strapline = "strapline",
      }) => (
        <Section>
          <Hero
            description={description}
            headingLevel={headingLevel}
            strapline={strapline}
          />
        </Section>
      ),
    },
    Markdown: {
      fields: {
        text: { type: "textarea" },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        measured: {
          type: "radio",
          options: [
            { label: "Full Width", value: false },
            { label: "Measured", value: true },
          ],
        },
      },
      defaultProps: {
        text: "## Markdown",
        align: "left",
        measured: false,
      },
      render: ({ text, align, measured }) => (
        <Section>
          <Markdown align={align} measured={measured}>
            {text}
          </Markdown>
        </Section>
      ),
    },
    Paragraph: {
      fields: {
        text: { type: "textarea" },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        size: {
          type: "select",
          options: [
            { label: "Default", value: "" },
            { label: "Small", value: "small" },
            { label: "Large", value: "large" },
          ],
        },
        maxWidth: {
          type: "text",
        },
      },
      defaultProps: {
        size: "",
        text: "Paragraph",
        maxWidth: "",
        align: "left",
      },
      render: ({ size, text, maxWidth, align }) => (
        <Section>
          <Paragraph size={size} maxWidth={maxWidth} align={align}>
            {text}
          </Paragraph>
        </Section>
      ),
    },
    Post: {
      fields: {
        title: { type: "text" },
        date: { type: "text" },
        modifiedDate: { type: "text" },
        author: { type: "text" },
        authorUrl: { type: "text" },
        content: { type: "textarea" },
      },
      defaultProps: {
        author: "Author",
        authorUrl: "",
        content: "",
        date: new Date().toISOString().split("T")[0],
        modifiedDate: "",
        title: "Title",
      },
      render: ({ author, authorUrl, content, date, modifiedDate, title }) => (
        <Section>
          <Space size="07" />
          <Heading level="1" maxWidth="15em" size="1">
            {title}
          </Heading>
          <Space size="02" />
          <Paragraph size="small">{`${date} ${
            modifiedDate ? ` _(updated ${modifiedDate})_` : ""
          } • ${authorUrl ? `[${author}](${authorUrl})` : author}`}</Paragraph>
          <Space size="06" />
          <Markdown measured={true}>{content}</Markdown>
          <Space size="12" />
        </Section>
      ),
    },
    Profile: {
      fields: profileFields,
      defaultProps: defaultProfileProps,
      render: (props) => (
        <Section>
          <Profile {...props} />
        </Section>
      ),
    },
    ProfileDeck: {
      fields: {
        profiles: {
          type: "array",
          arrayFields: profileFields as any,
          defaultItemProps: {
            ...defaultProfileProps,
            direction: "column",
            imageVariant: "round",
          },
        },
      },
      defaultProps: { profiles: [{ ...defaultProfileProps }] },
      render: ({ profiles }) => (
        <Section>
          <ProfileDeck>
            {profiles.map((profile, idx) => (
              <Profile key={idx} {...profile} />
            ))}
          </ProfileDeck>
        </Section>
      ),
    },
    Space: {
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
      render: ({ size }) => <Space size={size} />,
    },
    Technologies: {
      render: () => (
        <Section>
          <Technologies />
        </Section>
      ),
    },
  },
};

export default config;
