import Image from "next/image";

import {
  Grid,
  Heading,
  Paragraph,
  Rule,
  Section,
  Space,
  Surface,
} from "../../../../components";

import Contact from "./components/Contact";
import Corner from "./components/Corner";
import Intro from "./components/Intro";
import Process from "./components/Process";
import Tip from "./components/Tip";
import { PostProps } from "..";

import "./NewIdentity.css";

interface NewIdentityProps extends Omit<PostProps, "content" | "template"> {}

const NewIdentity = ({ title }: NewIdentityProps) => (
  <div className="msrd-NewIdentity">
    <Surface background="dark">
      <div className="msrd-NewIdentity-hero">
        <Section>
          <Space size="11" />
          <Grid>
            <Grid.Item colSpan="6" colSpanNarrow="6">
              <Heading level="1" size="display3">
                {title}
              </Heading>
              <Space />
              <Rule />
              <Space size="06" />
              <p>
                Our overarching purpose is to elevate the quality, consistency
                and accessibility of UI across the web by helping our clients
                craft exceptional digital experiences. It’s important that our
                own visual identity reflects that.
              </p>
            </Grid.Item>
            <Grid.Item
              colSpan="5"
              colSpanNarrow="5"
              colStart="8"
              colStartNarrow="8"
            >
              <Image
                alt=""
                height="420"
                src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1740562751/site/logo_usvaov.png"
                width="420"
              />
            </Grid.Item>
          </Grid>
          <Space size="11" />
        </Section>
      </div>
    </Surface>
    <div className="msrd-NewIdentity-surfaceLight">
      <Section>
        <Space size="08" />
        <p className="msrd-NewIdentity-standfirst">
          Like the <a href="/">cobbler’s children</a> our visual identity had
          been somewhat neglected. When we founded Measured we quickly put
          together a nascent visual identity. It wasn’t terrible, but we always
          knew that the branding, and by dint our website, didn’t reflect who we
          are, or the quality of work we deliver.
        </p>
      </Section>
      <Section width="full">
        <Intro />
      </Section>
      <Section>
        <p className="msrd-NewIdentity-callout">
          In mid-2024, we decided it was time to do something about it. Here’s a
          look at how we developed our new visual identity, the thinking behind
          it, and some tips we’d share as a result.
        </p>
        <Space size="08" />
      </Section>
    </div>
    <Section>
      <Space size="08" />
      <Grid>
        <Grid.Item colSpan="5">
          <div className="msrd-NewIdentity-process">
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
          </div>
        </Grid.Item>
        <Grid.Item colSpan="7">
          <Process />
        </Grid.Item>
      </Grid>
      <Space size="08" />
    </Section>
    <div
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      <Section>
        <Space size="08" />
        <Heading align="center" level="2" size="2">
          The corner
        </Heading>
        <Space />
        <p className="msrd-NewIdentity-callout">
          At the heart of the identity is a simple shape we call the corner.
          This became the foundation for everything else — the logo, UI curves,
          background patterns, and more. It’s a versatile device that allows us
          to create recognisably Measured visuals, even without the logo.
        </p>
        <Space size="08" />
        <Corner />
        <Space size="08" />
      </Section>
    </div>
    <div className="msrd-NewIdentity-surfaceDark">
      <Section>
        <Space size="08" />
        <Grid>
          <Grid.Item align="start" colSpan="4">
            <div style={{ maxWidth: "12em" }}>
              <Heading level="2" size="2">
                Typography and colour
              </Heading>
            </div>
            <Space />
            <p>
              Typography was a key focus. We initially approached it from a
              techy perspective, particularly as the Display variant of Inter
              (our brand typeface) had recently released, optimised for
              headlines and large type. But James suggested we look at more
              timeless and classic alternatives.
            </p>
          </Grid.Item>
          <Grid.Item colSpan="3" colSpanNarrow="4" colStart="7">
            <div aria-hidden style={{ color: "var(--color-azure-08)" }}>
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
            <Space />
          </Grid.Item>
          <Grid.Item colSpan="3" colSpanNarrow="6" colStart="10">
            <div
              aria-hidden
              className="msrd-u-NewIdentity-hiddenMobile"
              style={{ color: "var(--color-azure-08)" }}
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
        <Space size="12" />
      </Section>
    </div>
    <div
      style={{
        marginBottom: "calc((-108 / 16) * 1rem)",
        position: "relative",
        top: "calc((-108 / 16) * 1rem)",
      }}
    >
      <Section>
        <Grid>
          <Grid.Item colSpan="4">
            <div className="msrd-NewIdentity-image">
              <Image
                alt=""
                height="216"
                src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1740479244/type-color-01_jkrcrd.jpg"
                width="384"
              />
            </div>
            <Space size="06" />
            <Rule />
            <Space size="06" />
            <p style={{ maxWidth: "20em" }}>
              We took James’s advice on styling headlines: no Inter Display, and
              instead of going bolder as they get larger, we reduced the weight
              for a calmer and, dare we say, more premium feel.
            </p>
            <Space />
          </Grid.Item>
          <Grid.Item colSpan="4">
            <div className="msrd-NewIdentity-image">
              <Image
                alt=""
                height="216"
                src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1740479538/type-color-02_dstt5m.jpg"
                width="384"
              />
            </div>
            <Space size="06" />
            <Rule />
            <Space size="06" />
            <p style={{ maxWidth: "20em" }}>
              We built a colour palette with a range of blues and other colours,
              giving us options to play with while prioritising accessibility.
              James encouraged us to lean into the new blues as the primary
              expression.
            </p>
            <Space />
          </Grid.Item>
          <Grid.Item colSpan="4">
            <div className="msrd-NewIdentity-image">
              <Image
                alt=""
                height="216"
                src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1740479538/type-color-03_qa15ri.jpg"
                width="384"
              />
            </div>
            <Space size="06" />
            <Rule />
            <Space size="06" />
            <p style={{ maxWidth: "20em" }}>
              We carefully considered background patterns and other design
              elements, which all derive from the corner shape and principles of
              the identity.
            </p>
          </Grid.Item>
        </Grid>
        <Space size="08" />
        <Grid>
          <Grid.Item colSpan="7" colSpanNarrow="6">
            <div className="msrd-NewIdentity-imageLarge">
              <Image
                alt=""
                height="618"
                src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1740401216/site/new-identity-01_wi2cl6.jpg"
                width="618"
              />
            </div>
          </Grid.Item>
          <Grid.Item align="center" colSpan="5">
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
              It’s designed to be flexible, so we can apply it to everything
              from physical media to video and animation if and when we need.
              We’re excited to see how it evolves as we continue to grow and
              experiment.
            </p>
            <Space />
            <p>
              We’re pleased to finally have a brand that feels like us, so
              thanks go to James for his excellent work. We’ll share more about
              how implemented the new identity soon.
            </p>
          </Grid.Item>
        </Grid>
        <Space size="08" />
      </Section>
    </div>
    <div
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
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
          <Grid.Item colSpan="10" colSpanNarrow="10">
            <Tip
              title="Start with a tone exercise"
              description="Ask your team to describe your brand and what sets it apart from competitors. Words like calm and intentional emerged from our exercise, and became guiding principles for the design."
              image="v1740442512/tip-02_ic13xj.jpg"
            />
            <Space size="08" />
            <Tip
              title="Write a strong brief"
              description="Spend time crafting a clear, detailed brief before bringing in a designer. This helps you get the most from their expertise and keeps the process focused."
              image="v1740442417/tip-02_ic13xj.jpg"
            />
            <Space size="08" />
            <Tip
              title="Look beyond competitors"
              description="While it’s helpful to look at what your competitors are doing, don’t be afraid to draw inspiration from brands you admire in different industries. We looked at companies like Vercel and Stripe."
              image="v1740442605/tip-03_xveqbg.jpg"
            />
            <Space size="08" />
            <Tip
              title="Collaborate across disciplines"
              description="Bringing together design and content early in the process was key for us. It helped us tackle the communication problem from multiple angles and create a cohesive result."
              image="v1740442606/tip-04_stdstl.jpg"
            />
          </Grid.Item>
        </Grid>
        <Space size="08" />
        <Contact />
        <Space size="08" />
      </Section>
    </div>
    <Space size="09" />
  </div>
);

export default NewIdentity;
