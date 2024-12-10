import { Rule, Heading } from "..";

import "./Contact.css";

const Contact = () => (
  <div className="msrd-Contact">
    <Heading size="display3" level="2">
      How can we help?
    </Heading>
    <div className="msrd-Contact-rule">
      <Rule align="center" />
    </div>
    <Heading size="3">
      <a href="mailto:paul@measured.co">paul@measured.co</a>
    </Heading>
  </div>
);

export default Contact;
