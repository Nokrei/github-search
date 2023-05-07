import { UserCard } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("User Card", () => {
  const userCard = (
    <UserCard
      userName="User"
      userLink="https://user.com"
      userAvatar="https://avatars.githubusercontent.com/u/181?v=4"
    />
  );
  it("renders an avatar", () => {
    render(userCard);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("provides a correct alt text to the avatar image", () => {
    render(userCard);
    expect(screen.getByAltText("User avatar")).toBeInTheDocument();
  });
  it("renders a correct link", () => {
    render(userCard);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://user.com"
    );
  });
});
