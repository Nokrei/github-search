import { Meta, StoryObj } from "@storybook/react";
import { Searcher } from ".";

const meta: Meta<typeof Searcher> = {
  title: "Searcher",
  component: Searcher,
};

export default meta;
type Story = StoryObj<typeof Searcher>;

export const Default: Story = {
  args: {
    description: "Search users or repositories below",
  },
};
