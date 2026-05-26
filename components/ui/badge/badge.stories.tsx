import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Badge } from "./badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    children: "Badge",
    onClick: fn(),
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    children: "Badge ",
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
