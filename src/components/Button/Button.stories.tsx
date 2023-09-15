import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Button } from ".";
import { ButtonProps } from "./type";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
