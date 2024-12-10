import { ComponentConfig } from "@measured/puck";

import {
  Profile as _Profile,
  ProfileProps as _ProfileProps,
} from "../../components";

export type ProfileProps = _ProfileProps;

export const Profile: ComponentConfig<ProfileProps> = {
  defaultProps: {
    description: "Description",
    image:
      "https://res.cloudinary.com/measuredco/image/upload/v1732808209/site/profile-pic-placeholder_hyjf8o.png",
    name: "Name",
    title: "Title",
  },
  fields: {
    name: {
      type: "text",
    },
    title: {
      type: "text",
    },
    description: { type: "textarea" },
    image: {
      type: "text",
    },
    link: {
      type: "text",
    },
  },
  render: ({ description, image, link, name, title }) => (
    <_Profile
      description={description}
      image={image}
      link={link}
      name={name}
      title={title}
    />
  ),
};
