import type { Meta, StoryObj } from "@storybook/nextjs";
import Sort from "./Sort";
import { fn } from "storybook/test";

const meta = {
  title: "UI/Sort",
  component: Sort,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSort: fn(),
  },
} satisfies Meta<typeof Sort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
