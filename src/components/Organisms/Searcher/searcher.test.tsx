import { Searcher } from ".";
import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Repository Card", () => {
  const searcher = <Searcher description="description" />;
  it("renders a heading, description, input field and select field", () => {
    render(searcher);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Start typing to search...")
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders 'users' as default select option and updates it correctly", async () => {
    render(searcher);
    const categoryOptions = screen.getByRole("combobox");
    expect(categoryOptions).toHaveValue("users");
    await act(() => userEvent.selectOptions(categoryOptions, "repositories"));
    expect(categoryOptions).toHaveValue("repositories");
  });
});
