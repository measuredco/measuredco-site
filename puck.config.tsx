import type {
  ComponentConfig,
  Config,
  DefaultRootProps,
  Fields,
} from "@measured/puck";

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
  Paragraph,
  Profile,
  ProfileDeck,
  Section,
  Space,
  Technologies,
} from "./components";

import { logosMapping } from "./components/Logos";
import { Markdown } from "./components/Markdown";

type ProfileProps = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  descriptionSize: "03" | "04" | "05";
  url: string;
  cta: string;
  imageVariant: "" | "round";
  reverse: boolean;
  direction: "row" | "column";
};

type Props = {
  Button: { href: string; label: string };
  Contact: {};
  Clients: {
    logos: { logo: [keyof typeof logosMapping] }[];
  };
  Heading: {
    level: "1" | "2" | "3" | "4" | "5" | "6" | "";
    desktopSize:
      | ""
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
      | "12"
      | "13"
      | "14"
      | "15";
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
      | "12"
      | "13"
      | "14"
      | "15";
    text: string;
    id: string;
    maxWidth: string;
    align: "left" | "center" | "right";
  };
  Hero: {
    strapline: string;
    description: string;
  };
  Markdown: {
    text: string;
    maxWidth: string;
    align: "left" | "center" | "right";
    sectionWidth: "narrow" | "";
  };
  Paragraph: {
    desktopSize: "" | "01" | "02" | "03" | "04" | "05";
    size: "01" | "02" | "03" | "04" | "05";
    text: string;
    maxWidth: string;
    align: "left" | "center" | "right";
  };
  Profile: ProfileProps;
  ProfileDeck: { profiles: ProfileProps[] };
  CardDeck: {
    cards: {
      artifact: string;
      title: string;
      description: string;
    }[];
  };
  Space: {};
  Technologies: {};
};

type RootProps = {
  headerLinks: { href: string; label: string }[];
} & DefaultRootProps;

const profileFields: Fields<ProfileProps> = {
  title: { type: "text" },
  subtitle: { type: "text" },
  description: { type: "textarea" },
  descriptionSize: {
    type: "select",
    options: [
      { label: "03", value: "03" },
      { label: "04", value: "04" },
      { label: "05", value: "05" },
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
  descriptionSize: "05",
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
      headerLinks: {
        type: "array",
        arrayFields: {
          href: {
            type: "text",
          },
          label: {
            type: "text",
          },
        },
        defaultItemProps: {
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
          {children}
          <Footer />
        </Base>
      );
    },
  },
  components: {
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
              ],
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
            { label: "13", value: "13" },
            { label: "14", value: "14" },
            { label: "15", value: "15" },
          ],
        },
        desktopSize: {
          type: "select",
          options: [
            { label: "", value: "" },
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
            { label: "13", value: "13" },
            { label: "14", value: "14" },
            { label: "15", value: "15" },
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
        desktopSize: "",
        size: "10",
        text: "Heading",
        id: "",
        maxWidth: "",
        align: "left",
      },
      render: ({ desktopSize, level, size, text, id, maxWidth, align }) => (
        <Section>
          <Heading
            desktopSize={desktopSize}
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
      },
      render: ({ description = "description", strapline = "strapline" }) => (
        <Section>
          <Hero description={description} strapline={strapline} />
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
        sectionWidth: {
          type: "radio",
          options: [
            { label: "Default", value: "" },
            { label: "Narrow", value: "narrow" },
          ],
        },
        maxWidth: {
          type: "text",
        },
      },
      defaultProps: {
        text: "## Markdown",
        align: "left",
        maxWidth: "",
        sectionWidth: "",
      },
      render: ({ text, align, maxWidth, sectionWidth }) => (
        <Section width={sectionWidth}>
          <Markdown align={align} maxWidth={maxWidth}>
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
            { label: "", value: "" },
            { label: "01", value: "01" },
            { label: "02", value: "02" },
            { label: "03", value: "03" },
            { label: "04", value: "04" },
            { label: "05", value: "05" },
          ],
        },
        desktopSize: {
          type: "select",
          options: [
            { label: "", value: "" },
            { label: "01", value: "01" },
            { label: "02", value: "02" },
            { label: "03", value: "03" },
            { label: "04", value: "04" },
            { label: "05", value: "05" },
          ],
        },
        maxWidth: {
          type: "text",
        },
      },
      defaultProps: {
        desktopSize: "",
        size: "03",
        text: "Paragraph",
        maxWidth: "",
        align: "left",
      },
      render: ({ desktopSize, size, text, maxWidth, align }) => (
        <Section>
          <Paragraph
            size={size}
            desktopSize={desktopSize}
            maxWidth={maxWidth}
            align={align}
          >
            {text}
          </Paragraph>
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
        size: "08",
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
      render: Space,
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
