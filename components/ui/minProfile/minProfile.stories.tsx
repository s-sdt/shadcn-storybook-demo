import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { MinProfile } from "./minProfile";

const meta = {
  title: "UI/MinProfile",
  component: MinProfile,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    defaultValues: {
      isPublic: true,
      firstName: "Adam",
      lastName: "Chef",
      municipality: "stockholms_kommun",
      experienceYears: 10,
      bio: "Om mig.",
      municipalityStory: "Kommun.",
      kitchenFacts: "Styrkor.",
    },
    municipalityOptions: [
      { label: "Stockholms kommun", value: "stockholms_kommun" },
      { label: "Göteborgs kommun", value: "göteborgs_kommun" },
      { label: "Malmö kommun", value: "malmö_kommun" },
    ],
    avatarUrl: "https://placehold.co/96x96",
    gallery: ["https://placehold.co/96x96", "https://placehold.co/96x96"],
    onChangePic: fn(),
    onAddGallery: fn(),
    onDeleteGallery: fn(),
    onCancel: fn(),
    onSave: fn(),
  },
} satisfies Meta<typeof MinProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NotPublished: Story = {
  args: {
    defaultValues: {
      isPublic: false,
      firstName: "Adam",
      lastName: "Chef",
      municipality: "stockholms_kommun",
      experienceYears: 10,
      bio: "Om mig",
      municipalityStory: "Kommun.",
      kitchenFacts: "Styrkor.",
    },
  },
};
