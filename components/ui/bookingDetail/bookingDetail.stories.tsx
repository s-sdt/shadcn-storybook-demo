import type { Meta, StoryObj } from "@storybook/nextjs";
import { BookingDetail } from "./bookingDetail";

const meta = {
  title: "UI/BookingDetail",
  component: BookingDetail,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    requestId: "g1KTHQqX0XIHqqow0gL",
    title: "Dinner event",
    eventDate: "14 Aug 2024",
    number_of_guests: 7,
    totalAmount: "6 700,00",
    basePrice: "2 500,00",
    pricePerGuest: "400,00",
    weekdayModifier: "1.5x",
    weekdayName: "Lördag",
    platformFee: "12%",
    chefFee: "5 896,00",
    createdDate: "26 Jan 2026",
    completedDate: "26 Feb 2026",
    bookingDesc: "om bokning",
    missingKitchenArticles: ["Här är en lista..."],
  },
} satisfies Meta<typeof BookingDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirmed: Story = {
  args: { status: "confirmed" },
};

export const Cancelled: Story = {
  args: { status: "cancelled" },
};

export const PendingPayment: Story = {
  args: { status: "pending_payment" },
};

export const WaitingForPayment: Story = {
  args: { status: "waiting_for_payment" },
};

export const CancelPendingRefund: Story = {
  args: { status: "cancel_pending_refund" },
};

export const CancellationFailed: Story = {
  args: { status: "cancellation_failed" },
};
