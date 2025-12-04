import { Heading, Grid, Paragraph, Space } from "../../../../../../components";

import "./Typography.css";

const Typography = () => (
  <div className="msrd-NewIdentityTypography">
    <Space size="08" />
    <Grid>
      <Grid.Item align="start" colSpan="4">
        <div className="msrd-NewIdentityTypography-heading">
          <Heading level="2" size="2">
            Typography and colour
          </Heading>
        </div>
        <Space />
        <p>
          Typography was a key focus. We initially approached it from a techy
          perspective, particularly as the Display variant of Inter (our brand
          typeface) had recently released, optimised for headlines and large
          type. But James suggested we look at more timeless and classic
          alternatives.
        </p>
      </Grid.Item>
      <Grid.Item colSpan="3" colSpanNarrow="6" colStart="7">
        <div aria-hidden className="msrd-NewIdentityTypography-specimen">
          <Heading size="1">Heading 1</Heading>
          <Space size="03" />
          <Heading size="2">Heading 2</Heading>
          <Space size="03" />
          <Heading size="3">Heading 3</Heading>
          <Space size="03" />
          <Heading size="4">Heading 4</Heading>
          <Space size="03" />
          <Heading size="5">Heading 5</Heading>
          <Space size="03" />
          <Heading size="6">Heading 6</Heading>
          <Space size="03" />
          <Paragraph size="small">Body</Paragraph>
        </div>
      </Grid.Item>
      <Grid.Item colSpan="3" colSpanNarrow="6" colStart="10">
        <div
          aria-hidden
          className="msrd-u-NewIdentity-hiddenMobile msrd-NewIdentityTypography-specimen"
        >
          <Heading size="1">48px / 60px</Heading>
          <Space size="03" />
          <Heading size="2">36px / 48px</Heading>
          <Space size="03" />
          <Heading size="3">28px / 42px</Heading>
          <Space size="03" />
          <Heading size="4">24px / 36px</Heading>
          <Space size="03" />
          <Heading size="5">20px / 30px</Heading>
          <Space size="03" />
          <Heading size="6">18px / 27px</Heading>
          <Space size="03" />
          <Paragraph size="small">16px / 24px</Paragraph>
        </div>
      </Grid.Item>
    </Grid>
  </div>
);

export default Typography;
