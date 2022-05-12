import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardComponent } from "./Card";

export default {
  title: "Example/Card",
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const HoverSelectedAllStates = Template.bind({});

HoverSelectedAllStates.args = {
  label: "Flood zone 3",
};

HoverSelectedAllStates.parameters = {
  backgrounds: { default: "grey" },
};
