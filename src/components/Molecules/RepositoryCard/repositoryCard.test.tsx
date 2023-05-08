import { RepositoryCard } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const repository = {
  id: 1,
  name: "My repo",
  description: "My repo description",
  stargazers_count: 200,
  topics: ["topic1", "topic2", "topic3"],
  updated_at: "2011-10-05T14:48:00.000Z",
};

const defaultProps = {
  repository: {
    ...repository,
  },
};

const propsWithEmptyTopicsArray = {
  repository: {
    ...repository,
    topics: [],
  },
};

describe("Repository Card", () => {
  it("renders all repository data", () => {
    render(<RepositoryCard {...defaultProps} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
    expect(screen.getByText("My repo description")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(
      screen.getByText(new Date("2011-10-05T14:48:00.000Z").toDateString())
    ).toBeInTheDocument();
  });

  it("doesn't render a list if there are no topics", () => {
    render(<RepositoryCard {...propsWithEmptyTopicsArray} />);
    expect(screen.queryByRole("list")).toBeNull();
  });
});
