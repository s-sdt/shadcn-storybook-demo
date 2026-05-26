import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "../button/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "default",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     size: "default",
//   },
// };

export const Default: Story = {
  render: () => (
    <Card size="default">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card content</p>
      </CardContent>
      <CardFooter className="justify-end gap-2">Card footer</CardFooter>
    </Card>
  ),
};

export const Sm: Story = {
  args: {
    size: "sm",
  },
};
