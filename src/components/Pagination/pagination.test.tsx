import { Pagination } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Pagination", () => {
  const pagination = (
    <Pagination
      goToNextPage={jest.fn}
      goToPrevPage={jest.fn}
      isNextButtonDisabled={false}
      isPrevButtonDisabled={false}
    />
  );
  it("renders two buttons", () => {
    render(pagination);
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
  it("renders the 'Next' button", () => {
    render(pagination);
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
  it("renders the 'Prev' button", () => {
    render(pagination);
    expect(screen.getByText("Prev")).toBeInTheDocument();
  });
});
