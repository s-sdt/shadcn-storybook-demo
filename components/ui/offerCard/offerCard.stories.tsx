import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card/card";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { OfferCard } from "./offerCard";

const meta = {
  title: "UI/OfferCard",
  component: OfferCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof OfferCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const OfferCardTemplate: Story = {
  args: {
    customerName: "",
    date: "",
    status: "BOKAD",
    type: "",
    guests: "",
    menu: "",
    price: "",
  },
  render: (args) => <OfferCard {...args} />,
};

export const Booked = {
  ...OfferCardTemplate,
  args: {
    customerName: "Michael D. Peters",
    date: "14 Aug 2024",
    status: "BOKAD",
    type: "Dinner",
    guests: "3-6 gäster",
    menu: "Multiple Meny",
    price: "~6400 SEK",
  },
};

export const Erbjuden = {
  ...OfferCardTemplate,
  args: {
    customerName: "Sara Lindqvist",
    date: "20 Aug 2024",
    status: "ERBJUDEN",
    type: "Lunch",
    guests: "2-4 gäster",
    menu: "Simple Meny",
    price: "~3200 SEK",
  },
};
