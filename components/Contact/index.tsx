import { Copy, Rule, Heading } from "..";

import "./Contact.css";

export type ContactProps = {
  email: string;
  text: string;
};

const Contact = ({ email, text }: ContactProps) => (
  <div className="msrd-Contact">
    <Heading size="display3" level="2">
      {text}
    </Heading>
    <div className="msrd-Contact-rule">
      <Rule align="center" />
    </div>
    <div className="msrd-Contact-email">
      <Heading size="3">
        <a href={`mailto:${email}`}>{email}</a>
      </Heading>
      <Copy text={email} />
    </div>
  </div>
);

export default Contact;
