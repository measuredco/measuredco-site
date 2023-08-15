import type { Config, DefaultRootProps } from "@measured/puck";

import {
  Base,
  Card,
  Cards,
  Contact,
  Footer,
  Header,
  Heading,
  Hero,
  Logos,
  Section,
  Space,
  Technologies,
  Work,
} from "./components";

import { logosMapping } from "./components/Logos";
import Paragraph from "./components/Paragraph";

type Props = {
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
  };
  Hero: {
    strapline: string;
    description: string;
  };
  Paragraph: {
    desktopSize: "" | "01" | "02" | "03" | "04" | "05";
    size: "01" | "02" | "03" | "04" | "05";
    text: string;
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
  Work: { client: string; image: string; project: string; url: string };
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
        type: "text",
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
    Contact: {
      render: () => (
        <Section>
          <Contact />
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
      },
      defaultProps: {
        level: "",
        desktopSize: "",
        size: "10",
        text: "Heading",
        id: "",
      },
      render: ({ desktopSize, level, size, text, id }) => (
        <Section>
          <Heading desktopSize={desktopSize} level={level} size={size} id={id}>
            {text}
          </Heading>
        </Section>
      ),
    },
    Hero: {
      fields: {
        strapline: { type: "text" },
        description: { type: "text" },
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
      },
      defaultProps: { desktopSize: "", size: "03", text: "Paragraph" },
      render: ({ desktopSize, size, text }) => (
        <Section>
          <Paragraph size={size} desktopSize={desktopSize}>
            {text}
          </Paragraph>
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
    Work: {
      fields: {
        client: { type: "text" },
        image: { type: "text" },
        project: { type: "text" },
        url: { type: "text" },
      },
      render: ({
        client = "client",
        image = "src.jpg",
        project = "project",
        url = "example.com",
      }) => (
        <Section>
          <Work client={client} image={image} project={project} url={url} />
        </Section>
      ),
    },
  },
};

export default config;
