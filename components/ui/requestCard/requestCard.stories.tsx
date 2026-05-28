import type { Meta, StoryObj } from "@storybook/nextjs";
import { RequestCard } from "./requestCard";

import { Card, CardContent, CardFooter } from "@/components/ui/card/card";

const meta = {
  title: "UI/RequestCard",
  component: RequestCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof RequestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const RequestCardTemplate: Story = {
  args: {
    event: "",
    date: "",
    guests: "",
    kund: "",
    location: "",
    status: "BOKAD",
    menu: "",
    tillfälle: "",
  },
  render: (args) => <RequestCard {...args} />,
};

export const Booked = {
  ...RequestCardTemplate,
  args: {
    event: "Lunch",
    date: "14 Aug 2024",
    guests: "3-6 gäster",
    kund: "Sara Eriksson",
    location: "Stockholm",
    status: "BOKAD",
    menu: "Mediterranean, seafood",
    tillfälle: "Birthday",
  },
};

export const SKICKAD = {
  ...RequestCardTemplate,
  args: {
    event: "Dinner",
    date: "14 Aug 2024",
    guests: "3-6 gäster",
    kund: "Sara Eriksson",
    location: "Göteborg",
    status: "SKICKAD",
    menu: "Mediterranean, seafood",
    tillfälle: "Birthday",
  },
};

export const Inaktiv = {
  ...RequestCardTemplate,
  args: {
    event: "Dinner",
    date: "14 Aug 2024",
    guests: "2-4 gäster",
    kund: "Sara Eriksson",
    location: "Göteborg",
    status: "INAKTIV",
    menu: "Mediterranean, seafood",
    tillfälle: "Birthday",
  },
};

// export default {};
