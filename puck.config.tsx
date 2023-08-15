import type { Config, DefaultRootProps } from "@measured/puck";

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
  Section,
  Space,
  Technologies,
} from "./components";

import { logosMapping } from "./components/Logos";

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
  };
  Hero: {
    strapline: string;
    description: string;
  };
  Paragraph: {
    desktopSize: "" | "01" | "02" | "03" | "04" | "05";
    size: "01" | "02" | "03" | "04" | "05";
    text: string;
    maxWidth: string;
  };
  Profile: {
    title: string;
    image: string;
    description: string;
    url: string;
    cta: string;
    imageVariant: "" | "round";
    reverse: boolean;
  };
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
        logos: [],
      },
      render: ({ logos }) => (
        <Section>
          <h2 className="msrd-u-visuallyHidden">Clients</h2>
          <Logos>{logos.map((logoKey) => logosMapping[logoKey.logo])}</Logos>
        </Section>
      ),
    },
    Heading: {
      fields: {
        text: { type: "text" },
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
      },
      render: ({ desktopSize, level, size, text, id, maxWidth }) => (
        <Section>
          <Heading
            desktopSize={desktopSize}
            level={level}
            size={size}
            id={id}
            maxWidth={maxWidth}
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
    Paragraph: {
      fields: {
        text: { type: "textarea" },
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
      },
      render: ({ desktopSize, size, text, maxWidth }) => (
        <Section>
          <Paragraph size={size} desktopSize={desktopSize} maxWidth={maxWidth}>
            {text}
          </Paragraph>
        </Section>
      ),
    },
    Profile: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
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
      },
      defaultProps: {
        title: "Title",
        image: "Screenshot-BT-01_jpqlkt.tiff",
        imageVariant: "",
        description: "Description",
        url: "example.com",
        cta: "example.com",
        reverse: false,
      },
      render: ({
        title,
        image,
        imageVariant,
        description,
        url,
        cta,
        reverse,
      }) => (
        <Section>
          <Profile
            title={title}
            image={image}
            imageVariant={imageVariant}
            description={description}
            url={url}
            cta={cta}
            reverse={reverse}
          />
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
