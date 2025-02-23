import { Heading, Section } from "../../../../components";

import { PostProps } from "..";

import "./NewIdentity.css";

interface NewIdentityProps extends Omit<PostProps, "content" | "template"> {}

const NewIdentity = ({ title }: NewIdentityProps) => (
  <Section>
    <Heading level="1" size="display3">
      {title}
    </Heading>
    <div className="msrd-NewIdentity-custom">Custom blog template!</div>
  </Section>
);

export default NewIdentity;
