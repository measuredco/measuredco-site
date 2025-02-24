import { Grid, Heading, Rule, Section, Space } from "../../../../components";

import { PostProps } from "..";

import "./NewIdentity.css";

interface NewIdentityProps extends Omit<PostProps, "content" | "template"> {}

const NewIdentity = ({ title }: NewIdentityProps) => (
  <div className="msrd-NewIdentity">
    <div style={{ backgroundColor: "var(--color-background-highlight)" }}>
      <Section>
        <Grid>
          <Grid.Item colSpan="6" colSpanNarrow="6">
            <Space size="12" />
            <Heading level="1" size="display3">
              {title}
            </Heading>
            <Space />
            <Rule />
            <Space size="06" />
            <p>
              Our overarching purpose is to elevate the quality, consistency and
              accessibility of UI across the web by helping our clients craft
              exceptional digital experiences. So it’s a bit of a problem if our
              own visual identity doesn’t reflect that.
            </p>
            <Space size="11" />
          </Grid.Item>
        </Grid>
      </Section>
    </div>
    <Section>
      <Space size="08" />
      <p className="msrd-NewIdentity-standfirst">
        Like the <a href="/">cobbler’s children</a>, our visual identity had
        been somewhat neglected. We quickly put together a nascent visual
        identity when we founded Measured. It wasn’t terrible, but we always
        knew that the branding, and by dint our website, didn’t reflect who we
        are, or the quality of work we deliver.
      </p>
    </Section>
    <Section width="full">
      <Space size="07" />
    </Section>
    <Section>
      <p className="msrd-NewIdentity-callout">
        In mid-2024, we decided it was time to do something about it. Here’s a
        look at how we developed our new visual identity, the thinking behind
        it, and what we learned along the way.
      </p>
      <Space size="08" />
    </Section>
    <div style={{ backgroundColor: "var(--color-background-highlight)" }}>
      <Section>
        <Space size="08" />
        <Grid>
          <Grid.Item colSpan="7">
            <Heading level="2" size="1">
              The design process
            </Heading>
            <Space />
            <Rule />
            <Space size="06" />
            <p>
              We partnered with{" "}
              <a href="https://www.linkedin.com/in/james-edward-cross-43269317/">
                James Cross
              </a>
              , a highly-experienced designer based in Copenhagen, to develop a
              new identity. James has a storied career spanning print, digital,
              and art direction, and his expertise was invaluable.
            </p>
            <Space />
            <p>
              We kicked off the process with open-ended exploratory work:
              reading, research and prototyping ideas in Figma. We wanted the
              identity to come from us. This work was then distilled into the
              brief that we gave to James.
            </p>
            <Space />
            <p>
              From there, the process was collaborative and iterative. James
              worked in rounds, presenting a number of options in the early
              stages, and then iterating on the preferred routes.
            </p>
            <Space />
            <p>
              At each stage, James would send over the latest designs for us to
              look at. Once we’d had a chance to digest them, we’d jump on a
              call where James would present the thinking behind them, and we’d
              give feedback. We didn’t need to share written feedback at any
              stage.
            </p>
            <Space />
            <p>
              We went through three or four rounds, starting with the key
              concepts before arriving at the last details, and ultimately a
              system that felt right.
            </p>
          </Grid.Item>
          <Grid.Item colSpan="5"></Grid.Item>
        </Grid>
        <Space size="08" />
      </Section>
    </div>
    <Section>
      <Space size="08" />
      <Heading align="center" level="2" size="2">
        The corner
      </Heading>
      <Space />
      <p className="msrd-NewIdentity-callout">
        At the heart of the identity is a simple shape we call the corner. This
        became the foundation for everything else — the logo, UI curves,
        background patterns, and more. It’s a versatile device that allows us to
        create recognisably Measured visuals, even without the logo.
      </p>
      <Space size="08" />
    </Section>
    <div style={{ backgroundColor: "var(--color-background-highlight)" }}>
      <Section>
        <Space size="08" />
        <Grid>
          <Grid.Item colSpan="2">
            <Heading level="2" size="2">
              Typography and colour
            </Heading>
          </Grid.Item>
          <Grid.Item colSpan="4" rowStart="2">
            <p>
              Typography was a key focus. We initially approached it from a
              techy perspective, particularly because the new Display variant of
              Inter had recently released, which is optimised for headlines and
              large type.
            </p>
            <Space />
          </Grid.Item>
          <Grid.Item colSpan="6" colStart="7" rowSpan="2"></Grid.Item>
          <Grid.Item colSpan="4">
            <Space />
            <Rule />
            <Space size="06" />
            <p style={{ maxWidth: "20em" }}>
              But James suggested we look at more timeless and classic
              alternatives. We ended up taking his advice on styling headlines:
              Instead of going bolder as they get larger, we reduced the weight
              for a calmer and, dare we say, more premium feel.
            </p>
          </Grid.Item>
          <Grid.Item colSpan="4">
            <Space />
            <Rule />
            <Space size="06" />
            <p style={{ maxWidth: "20em" }}>
              We built a complete palette incorporating a range of blues and
              other colours using our colour method, which gives a range of
              options for creative purposes while keeping accessibility firmly
              in mind. Blue was already a supporting brand colour, but James
              encouraged us to lean into the new range of blues as the primary
              expression.
            </p>
          </Grid.Item>
          <Grid.Item colSpan="4">
            <Space />
            <Rule />
            <Space size="06" />
            <p style={{ maxWidth: "20em" }}>
              We also carefully considered background patterns and other design
              elements, which all derive from the corner shape and principles of
              the identity.
            </p>
          </Grid.Item>
        </Grid>
        <Space size="08" />
      </Section>
    </div>
    <Section>
      <Space size="08" />
      <Grid>
        <Grid.Item colSpan="6"></Grid.Item>
        <Grid.Item colSpan="5">
          <Heading level="2" size="2">
            Where next?
          </Heading>
          <Space />
          <p>
            The new visual identity is systematic, intentional, and built to
            last. It’s professional, clean, and flexible enough to evolve with
            us as we grow. We’ve already applied it to our website and social
            presences, where it’s been pleasingly well-received.
          </p>
          <Space />
          <p>
            It’s designed to be flexible, so we can apply it to everything from
            physical media to video and animation if and when we need. We’re
            excited to see how it evolves as we continue to grow and experiment.
          </p>
          <Space />
          <p>
            We’re pleased to finally have a brand that feels like us, so thanks
            go to James for his excellent work. We’ll share more about how
            implemented the new identity soon.
          </p>
        </Grid.Item>
      </Grid>
      <Space size="08" />
    </Section>
    <div style={{ backgroundColor: "var(--color-background-highlight)" }}>
      <Section>
        <Space size="08" />
        <Heading align="center" level="2" size="2">
          Visual identity tips
        </Heading>
        <Space />
        <p className="msrd-NewIdentity-callout" style={{ maxWidth: "35em" }}>
          To wrap up, here are few tips to consider if you’re embarking on a
          visual identity refresh for your brand. These are things that worked
          well for us.
        </p>
        <Space size="08" />
        <Grid>
          <Grid.Item colSpan="9" colStart="2">
            <Heading level="3" size="3">
              Start with a tone exercise
            </Heading>
            <Space size="04" />
            <p>
              Ask your team to describe your brand and what sets it apart from
              competitors. Words like “calm” and “intentional” emerged from our
              exercise, and became guiding principles for the design.
            </p>
            <Space size="08" />
            <Heading level="3" size="3">
              Write a strong brief
            </Heading>
            <Space size="04" />
            <p>
              Spend time crafting a clear, detailed brief before bringing in a
              designer. This helps you get the most from their expertise and
              keeps the process focused.
            </p>
            <Space size="08" />
            <Heading level="3" size="3">
              Look beyond competitors
            </Heading>
            <Space size="04" />
            <p>
              While it’s helpful to look at what your competitors are doing,
              don’t be afraid to draw inspiration from brands you admire in
              different industries. We looked at companies like Vercel and
              Stripe.
            </p>
            <Space size="08" />
            <Heading level="3" size="3">
              Collaborate across disciplines
            </Heading>
            <Space size="04" />
            <p>
              Bringing together design and content early in the process was key
              for us. It helped us tackle the communication problem from
              multiple angles and create a cohesive result.
            </p>
          </Grid.Item>
        </Grid>
        <Space size="08" />
      </Section>
    </div>
    <Space size="09" />
  </div>
);

export default NewIdentity;
