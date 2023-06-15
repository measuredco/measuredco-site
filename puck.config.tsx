import type { Config } from "@measured/puck";

import {
  Base,
  Cards,
  Contact,
  Footer,
  Header,
  Hero,
  Logos,
  Section,
  Space,
  Technologies,
  Work,
} from "./components";

type Props = {
  Contact: {};
  Clients: {};
  Footer: {};
  Header: {};
  Hero: {
    strapline: string;
    description: string;
  };
  Services: {};
  Space: {};
  Technologies: {};
  Work: { client: string; image: string; project: string; url: string };
};

export const config: Config<Props> = {
  root: {
    fields: {
      title: {
        type: "text",
      },
      description: {
        type: "text",
      },
    },
    render: Base,
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
      render: () => (
        <Section>
          <h2 className="msrd-u-visuallyHidden">Clients</h2>
          <Logos />
        </Section>
      ),
    },
    Footer: {
      render: Footer,
    },
    Header: {
      render: Header,
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
    Services: {
      render: () => (
        <Section>
          <h2 className="msrd-u-visuallyHidden" id="services">
            Services
          </h2>
          <Cards />
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
            { label: "S", value: "08" },
            { label: "M", value: "10" },
            { label: "L", value: "12" },
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
