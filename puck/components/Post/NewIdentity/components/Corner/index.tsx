import Image from "next/image";

import { Grid, Space } from "../../../../../../components";

import "./Corner.css";

const Corner = () => (
  <div className="msrd-NewIdentityCorner">
    <Grid>
      <Grid.Item
        align="center"
        colSpan="4"
        colSpanNarrow="5"
        colStartNarrow="2"
      >
        <div className="msrd-NewIdentityCorner-label">
          The small tile slice <br />
          The inner section of the corner creates the small tile slice with a
          single radius in the top right, which is a fixed element and must only
          be scaled proportionally.
        </div>
      </Grid.Item>
      <Grid.Item colSpan="4" colSpanNarrow="4" rowStart="2">
        <Image
          alt=""
          height="220"
          src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1740577629/site/corner_ekkdvm.png"
          width="220"
        />
      </Grid.Item>
      <Grid.Item colSpan="4" colSpanNarrow="6" rowSpan="2">
        <Image
          alt=""
          height="414"
          src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1740998495/site/corner_pkhjhu_isfwgg.webp"
          width="414"
        />
      </Grid.Item>
      <Grid.Item colSpan="4" colSpanNarrow="6" rowSpan="2">
        <div className="msrd-NewIdentityCorner-largeTile">
          <div className="msrd-NewIdentityCorner-label">
            The large tile slice <br />
            All components in the visual language are extracted from the corner.
            All proportions must be maintained and fixed to create a unified and
            coherent visual system.
          </div>
        </div>
      </Grid.Item>
      <Grid.Item colSpan="12">
        <Space />
        <p className="msrd-NewIdentityCorner-description">
          The corner is the foundation of the Measured identity and visual
          language. It is the core component used in the logo and has multiple
          applications across the visual language system.
        </p>
      </Grid.Item>
    </Grid>
  </div>
);

export default Corner;
