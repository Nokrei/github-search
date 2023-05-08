import { Meta, StoryObj } from "@storybook/react";
import { RepositoryCard } from ".";

const meta: Meta<typeof RepositoryCard> = {
  title: "RepositoryCard",
  component: RepositoryCard,
};

export default meta;
type Story = StoryObj<typeof RepositoryCard>;

export const Default: Story = {
  args: {
    repository: {
      description: "description",
      id: 1,
      name: "Repository card",
      stargazers_count: 200,
      topics: ["topic1", "topic2", "topic3"],
      updated_at: "2011-10-05T14:48:00.000Z",
    },
  },
};
