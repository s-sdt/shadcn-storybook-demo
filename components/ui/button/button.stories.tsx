import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: [
        "default",
        "sm",
        "lg",
        "xs",
        "icon",
        "icon-sm",
        "icon-xs",
        "icon-lg",
      ],
    },
  },
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    size: "lg"
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary ",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "outline ",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost ",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: " Destructive",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: " Link",
  },
};
