// import type { Meta, StoryObj } from "@storybook/nextjs";
// import { RequestCard } from "./requestCard";

// const meta = {
//   title: "UI/RequestCard",
//   component: RequestCard,
//   parameters: { layout: "centered" },
//   tags: ["autodocs"],
// } satisfies Meta<typeof RequestCard>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// const RequestCardTemplate: Story = {
//   args: {
//     // event: "",
//     variant: "",
//     date: "",
//     // guests: "",
//     number_of_guests: ",",
//     // kund: "",
//     uid: "",
//     // location: "",
//     address: "",
//     status: "BOKAD",
//     // menu: "",
//     foodType: [""],
//     occasion: "",
//     id: "", // ← ezafe kon
//     distance: 0, // ← ezafe kon
//   },
//   render: (args) => <RequestCard {...args} />,
// };

// export const Booked = {
//   ...RequestCardTemplate,
//   args: {
//     variant: "Lunch",
//     date: "14 Aug 2024",
//     number_of_guests: "3-6 gäster",
//     uid: "Sara Eriksson",
//     address: "Stockholm",
//     status: "BOKAD",
//     foodType: ["Mediterranean", "seafood"],  // ← dorost
//     occasion: "Birthday",
//     id: "", // ← ezafe kon
//     distance: 0, // ← ezafe kon
//   },
// };

// // export const SKICKAD = {
// //   ...RequestCardTemplate,
// //   args: {
// //     // event: "Dinner",
// //     variant: "dinner",
// //     date: "14 Aug 2024",
// //     guests: "3-6 gäster",
// //     kund: "Sara Eriksson",
// //     location: "Göteborg",
// //     status: "SKICKAD",
// //     menu: "Mediterranean, seafood",
// //     tillfälle: "Birthday",
// //     id: "", // ← ezafe kon
// //     distance: 0, // ← ezafe kon
// //   },
// // };

// // export const Inaktiv = {
// //   ...RequestCardTemplate,
// //   args: {
// //     event: "Dinner",
// //     date: "14 Aug 2024",
// //     guests: "2-4 gäster",
// //     kund: "Sara Eriksson",
// //     location: "Göteborg",
// //     status: "INAKTIV",
// //     menu: "Mediterranean, seafood",
// //     tillfälle: "Birthday",
// //     id: "", // ← ezafe kon
// //     distance: 0, // ← ezafe kon
// //   },
// // };

// // export default {};

import type { Meta, StoryObj } from "@storybook/nextjs";
import { RequestCard } from "./requestCard";

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
    id: "",
    uid: "",
    type: "",
    date: "",
    status: "BOKAD",
    occasion: "",
    number_of_guests: "",
    foodType: [],
    variant: "",
    municipality: "",
    distance: 0,
    address: "",
  },
  render: (args) => <RequestCard {...args} />,
};

export const Booked: Story = {
  ...RequestCardTemplate,
  args: {
    id: "sara-123",
    uid: "Sara Eriksson",
    type: "Lunch",
    date: "14 Aug 2024",
    status: "BOKAD",
    occasion: "Birthday",
    number_of_guests: "3-6 gäster",
    foodType: ["Mediterranean", "seafood"],
    variant: "Multiple Meny",
    municipality: "Stockholm",
    distance: 12.5,
    address: "Storgatan 1, 12345 Stockholm",
  },
};

export const Skickad: Story = {
  ...RequestCardTemplate,
  args: {
    id: "erik-456",
    uid: "Erik Andersson",
    type: "Dinner",
    date: "20 Sep 2024",
    status: "SKICKAD",
    occasion: "Anniversary",
    number_of_guests: "2-4 gäster",
    foodType: ["Italian", "vegetarian"],
    variant: "Single Meny",
    municipality: "Göteborg",
    distance: 5.2,
    address: "Storgatan 5, 12345 Göteborg",
  },
};

export const Inaktiv: Story = {
  ...RequestCardTemplate,
  args: {
    id: "anna-123",
    uid: "Anna Lindström",
    type: "Brunch",
    date: "5 Oct 2024",
    status: "INAKTIV",
    occasion: "Birthday",
    number_of_guests: "6-10 gäster",
    foodType: ["Local", "seafood"],
    variant: "Multiple Meny",
    municipality: "Malmö",
    distance: 30.0,
    address: "Stortorget 1, 12345 Malmö",
  },
};
