import { Button } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders a button", () => {
    render(
      <Button
        buttonText="button"
        isButtonDisabled={false}
        onButtonClick={jest.fn}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("renders a disabled button when the isButtonDisabled prop is set to true", () => {
    render(
      <Button
        buttonText="button"
        isButtonDisabled={true}
        onButtonClick={jest.fn}
      />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
