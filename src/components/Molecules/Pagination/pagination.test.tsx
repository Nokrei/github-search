import { Pagination } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Pagination", () => {
  it("renders all buttons correctly", () => {
    const mockGoToNext = jest.fn();

    render(
      <Pagination
        goToNextPage={mockGoToNext}
        goToPrevPage={jest.fn}
        isNextButtonDisabled={false}
        isPrevButtonDisabled={false}
      />
    );
    userEvent.click(screen.getByText("Next"));

    expect(mockGoToNext).toHaveBeenCalled();
  });
});
