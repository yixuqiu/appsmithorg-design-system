import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon as IconComponent } from "./Icon";

export default {
  title: "Design System V2/Icon",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof IconComponent> = (args) => {
  return <IconComponent {...args} />;
};

export const Icon = Template.bind({});

Icon.args = {
  name: "account-box-line",
  children: "",
  size: "2rem",
};
