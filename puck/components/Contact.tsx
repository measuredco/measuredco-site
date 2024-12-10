import { ComponentConfig } from "@measured/puck";

import { Contact as _Contact } from "../../components";

export type ContactProps = {};

export const Contact: ComponentConfig<ContactProps> = {
  render: () => <_Contact />,
};
