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

import Aspect from "./components/Aspect";
import Contact from "./components/Contact";
import Corner from "./components/Corner";
import Intro from "./components/Intro";
import Process from "./components/Process";
import Tip from "./components/Tip";
import Typography from "./components/Typography";
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
          Like the{" "}
          <a href="https://clearleft.com/thinking/the-cobblers-children-have-no-shoes">
            cobbler’s children
          </a>{" "}
          our visual identity had been somewhat neglected. When we founded
          Measured we quickly put together a nascent visual identity. It wasn’t
          terrible, but we always knew that the branding, and by dint our
          website, didn’t reflect who we are, or the quality of work we deliver.
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
        <Typography />
      </Section>
    </div>
    <div className="msrd-NewIdentity-offset">
      <Section>
        <Grid>
          <Grid.Item colSpan="4">
            <Aspect
              image="v1740479244/type-color-01_jkrcrd.jpg"
              description="We took James’s advice on styling headlines: no Inter Display, and
              instead of going bolder as they get larger, we reduced the weight
              for a calmer and, dare we say, more premium feel."
            />
          </Grid.Item>
          <Grid.Item colSpan="4">
            <Aspect
              image="v1740479538/type-color-02_dstt5m.jpg"
              description="We built a colour palette with a range of blues and other colours,
              giving us options to play with while prioritising accessibility.
              James encouraged us to lean into the new blues as the primary
              expression."
            />
          </Grid.Item>
          <Grid.Item colSpan="4">
            <Aspect
              image="v1740479538/type-color-03_qa15ri.jpg"
              description="We carefully considered background patterns and other design
              elements, which all derive from the corner shape and principles of
              the identity."
            />
          </Grid.Item>
        </Grid>
        <Space size="08" />
        <Grid>
          <Grid.Item
            colSpan="7"
            colSpanNarrow="6"
            colStart="1"
            colStartNarrow="7"
          >
            <div className="msrd-NewIdentity-imageLarge">
              <Image
                alt=""
                height="610"
                src="https://res.cloudinary.com/measuredco/image/upload/f_auto,q_auto/v1740401216/site/new-identity-01_wi2cl6.jpg"
                width="610"
              />
            </div>
          </Grid.Item>
          <Grid.Item
            align="center"
            colSpan="5"
            colStart="8"
            colSpanNarrow="6"
            colStartNarrow="1"
            rowStart="1"
          >
            <div className="msrd-NewIdentity-next">
              <Heading level="2" size="2">
                Where next?
              </Heading>
              <Space />
              <p>
                The new visual identity is systematic, intentional, and built to
                last. It’s professional, clean, and flexible enough to evolve
                with us as we grow. We’ve already applied it to our website and
                social presences, where it’s been pleasingly well-received.
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
                thanks go to James for his excellent work. We’ll share more
                about how we implemented the new identity soon.
              </p>
            </div>
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
          <Grid.Item colSpan="10" colSpanNarrow="10" colStartNarrow="2">
            <Tip
              title="Start with a tone exercise"
              description="Ask your team to describe your brand and what sets it apart from competitors. Words like calm and intentional emerged from our exercise, and became guiding principles for the design."
              image="v1740442512/tip-02_ic13xj.jpg"
            />
            <Space size="08" />
            <Tip
              title="Write a strong brief"
              description="Spend time crafting a clear, detailed brief before bringing in a designer. This helps you get the most from their expertise and keeps the process focused."
              image="v1741705447/tip-01_rsgttp.jpg"
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
