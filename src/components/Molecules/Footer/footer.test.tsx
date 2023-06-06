import { Footer } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("renders a footer", () => {
    render(<Footer />);
    expect(
      screen.getByText("Created by Piotr Mrozowski for KMMRCE")
    ).toBeInTheDocument();
  });

  it("snapshot test", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
