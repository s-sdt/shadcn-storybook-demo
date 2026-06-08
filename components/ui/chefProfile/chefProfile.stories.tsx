import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChefProfile } from "./chefProfile";

const meta = {
  title: "UI/ChefProfile",
  component: ChefProfile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    firstName: "Sara",
    lastName: "Andersson",
    avatarUrl: "https://placehold.co/390x297",
    municipality: "Stockholms kommun",
    experienceYears: 10,
    specialitet: "Nordic Food",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, harum consequatur id eligendi et dolor asperiores incidunt ut quibusdam odio!",
    municipalityStory:
      "Proin malesuada dolor tempus risus fermentum ornare. Ut id velit odio. Suspendisse et placerat libero, posuere viverra nunc. Aliquam erat volutpat. Sed lobortis placerat ipsum ut porttitor. Morbi id fringilla velit. Nam tempus, mi eget viverra ultricies, dolor sem rutrum ante, vel luctus mi lacus ac dui. ",
    kitchenFacts: {
      kapacitet: "2 - 50",
      kökstyp: "Modern Skandinavisk",
      språk: ["Svenska", "Engesla", "Franska"],
    },
    gallery: ["https://placehold.co/257x190", "https://placehold.co/255x195"],
    menus: [
      {
        id: "1",
        courses: [
          {
            course: "starter",
            name: "Gravlax med dillkräm",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, libero!",
          },
          {
            course: "main",
            name: "Entrecôte med bearnaisesås",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, libero!",
          },
          {
            course: "dessert",
            name: "Chokladfondant",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, libero!",
          },
        ],
      },
    ],
    reviews: [
      {
        id: "review-1",
        customerName: "Jennie Leion",
        date: "15 Mars 2024",
        rating: 5,
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quae at aliquam tenetur similique assumenda, consequuntur beatae culpa ipsa eum? Rem corporis aspernatur voluptatibus eveniet veritatis iusto labore fugiat. Nemo odio aperiam aliquid consectetur quod aut veniam eius alias minus?",
      },
      {
        id: "review-2",
        customerName: "Erik Svensson",
        date: "3 Juni 2024",
        rating: 4.5,
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quae at aliquam tenetur similique assumenda, consequuntur beatae culpa ipsa eum?",
      },
    ],
  },
} satisfies Meta<typeof ChefProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoGallery: Story = {
  args: {
    gallery: undefined,
  },
};
