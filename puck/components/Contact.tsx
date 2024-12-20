import { ComponentConfig } from "@measured/puck";

import {
  Contact as _Contact,
  ContactProps as _ContactProps,
} from "../../components";

export type ContactProps = _ContactProps;

export const Contact: ComponentConfig<ContactProps> = {
  defaultProps: {
    email: "paul@measured.co",
    text: "How can we help?",
  },
  fields: {
    email: { type: "text" },
    text: { type: "text" },
  },
  render: ({ email, text }) => <_Contact email={email} text={text} />,
};
