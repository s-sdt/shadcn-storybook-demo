import type { Meta, StoryObj } from "@storybook/nextjs";
import { BookingDetail } from "./bookingDetail";

const meta = {
  title: "UI/BookingDetail",
  component: BookingDetail,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof BookingDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

const BookingDetailTemplate: Story = {
  args: {
    requestId: "",
    title: "",
    status: "confirmed",
    eventDate: "",
    number_of_guests: 0,
    totalAmount: "",
    basePrice: "",
    pricePerGuest: "",
    weekdayModifier: "",
    platformFee: "",
    chefFee: "",
  },
  render: (args) => <BookingDetail {...args} />,
};

export const Confirmed: Story = {
  ...BookingDetailTemplate,
  args: {
    requestId: "g1KTHQqX0XIHqqow0gL",
    title: "Dinner event",
    status: "confirmed",
    eventDate: "14 Aug 2024",
    number_of_guests: 7,
    totalAmount: "6 700,00 ",
    basePrice: "2 500,00",
    pricePerGuest: "400,00",
    weekdayModifier: "1.5x",
    platformFee: "12%",
    chefFee: "5 896,00",
  },
};

export const Cancelled: Story = {
  ...BookingDetailTemplate,
  args: {
    requestId: "g1KTHQqX0XIHqqow0gL",
    title: "Dinner event",
    status: "cancelled",
    eventDate: "14 Aug 2024",
    number_of_guests: 7,
    totalAmount: "6 700,00 ",
    basePrice: "2 500,00",
    pricePerGuest: "400,00",
    weekdayModifier: "1.5x",
    platformFee: "12%",
    chefFee: "5 896,00",
  },
};

export const PendingPayment: Story = {
  ...BookingDetailTemplate,
  args: {
    requestId: "g1KTHQqX0XIHqqow0gL",
    title: "Dinner event",
    status: "pending_payment",
    eventDate: "14 Aug 2024",
    number_of_guests: 7,
    totalAmount: "6 700,00 ",
    basePrice: "2 500,00",
    pricePerGuest: "400,00",
    weekdayModifier: "1.5x",
    platformFee: "12%",
    chefFee: "5 896,00",
  },
};

export const WaitingForPayment: Story = {
  ...BookingDetailTemplate,
  args: {
    requestId: "g1KTHQqX0XIHqqow0gL",
    title: "Dinner event",
    status: "waiting_for_payment",
    eventDate: "14 Aug 2024",
    number_of_guests: 7,
    totalAmount: "6 700,00 ",
    basePrice: "2 500,00",
    pricePerGuest: "400,00",
    weekdayModifier: "1.5x",
    platformFee: "12%",
    chefFee: "5 896,00",
  },
};

export const CancelPendingRefund: Story = {
  ...BookingDetailTemplate,
  args: {
    requestId: "g1KTHQqX0XIHqqow0gL",
    title: "Dinner event",
    status: "cancel_pending_refund",
    eventDate: "14 Aug 2024",
    number_of_guests: 7,
    totalAmount: "6 700,00 ",
    basePrice: "2 500,00",
    pricePerGuest: "400,00",
    weekdayModifier: "1.5x",
    platformFee: "12%",
    chefFee: "5 896,00",
  },
};

export const CancellationFailed: Story = {
  ...BookingDetailTemplate,
  args: {
    requestId: "g1KTHQqX0XIHqqow0gL",
    title: "Dinner event",
    status: "cancellation_failed",
    eventDate: "14 Aug 2024",
    number_of_guests: 7,
    totalAmount: "6 700,00 ",
    basePrice: "2 500,00",
    pricePerGuest: "400,00",
    weekdayModifier: "1.5x",
    platformFee: "12%",
    chefFee: "5 896,00",
  },
};
