import { UserCard } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const defaultProps = {
  user: {
    id: 1,
    login: "User",
    html_url: "https://user.com",
    avatar_url: "https://avatars.githubusercontent.com/u/181?v=4",
  },
};

describe("User Card", () => {
  const userCard = <UserCard {...defaultProps} />;
  it("renders an avatar, alt text and correct link", () => {
    render(userCard);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText("User avatar")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://user.com"
    );
  });
});
