import { Meta, StoryObj } from "@storybook/react";
import { UserCard } from ".";

const meta: Meta<typeof UserCard> = {
  title: "UserCard",
  component: UserCard,
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    user: {
      id: 1,
      login: "User",
      avatar_url: "https://avatars.githubusercontent.com/u/181?v=4",
      html_url: "https://www.github.com",
    },
  },
};
