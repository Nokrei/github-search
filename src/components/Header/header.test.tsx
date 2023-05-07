import { Header } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("renders a header", () => {
    render(<Header />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
