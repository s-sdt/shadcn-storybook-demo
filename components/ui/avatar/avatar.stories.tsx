import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "default",
    children: "Avatar",
    onClick: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
//

export const Default: Story = {
  render: () => (
    <Avatar size="default">
      <AvatarImage src="https://github.com/shadcn.png" alt="CN" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Sm: Story = {
  render: () => (
    <Avatar size="sm">
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
  ),
};

export const Lg: Story = {
  render: () => (
    <Avatar size="lg">
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  ),
};
