import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Input } from "./input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "text",
    // placeholder: "Enter text...",
    onClick: fn(),
  },
  argTypes: {
    type: {
      options: ["text", "email", "date", "file", "password"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "email@mail.com",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Date",
  },
};

export const File: Story = {
  args: {
    type: "file",
    placeholder: "File",
  },
};
