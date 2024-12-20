import { Rule, Heading } from "..";

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
    <Heading size="3">
      <a href={`mailto:${email}`}>{email}</a>
    </Heading>
  </div>
);

export default Contact;
