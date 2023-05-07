import { Searcher } from ".";
import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Repository Card", () => {
  const searcher = <Searcher description="description" />;
  it("renders a heading", () => {
    render(searcher);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  it("renders a description", () => {
    render(searcher);
    expect(screen.getByText("description")).toBeInTheDocument();
  });
  it("renders a text input input", () => {
    render(searcher);
    expect(
      screen.getByPlaceholderText("Start typing to search...")
    ).toBeInTheDocument();
  });
  it("renders a select field", () => {
    render(searcher);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
  it("renders 'users' as default select option", () => {
    render(searcher);
    expect(screen.getByRole("combobox")).toHaveValue("users");
  });
  it("changes value when user selects different option", async () => {
    render(searcher);
    const categoryOptions = screen.getByRole("combobox");
    expect(categoryOptions).toHaveValue("users");
    await act(() => userEvent.selectOptions(categoryOptions, "repositories"));

    expect(categoryOptions).toHaveValue("repositories");
  });
});
