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
  it("renders all buttons correctly", () => {
    render(pagination);
    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Prev")).toBeInTheDocument();
  });
});
