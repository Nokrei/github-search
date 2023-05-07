import { RepositoryCard } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Repository Card", () => {
  const repositoryCard = (
    <RepositoryCard
      repoName="My repo"
      repoDescription="My repo description"
      repoStars={200}
      repoTopics={["topic1", "topic2", "topic3"]}
      repoUpdateDate="2011-10-05T14:48:00.000Z"
    />
  );
  it("renders a repository title", () => {
    render(repositoryCard);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  it("renders a repository description", () => {
    render(repositoryCard);
    expect(screen.getByText("My repo description")).toBeInTheDocument();
  });
  it("renders a correct star count", () => {
    render(repositoryCard);
    expect(screen.getByText("200")).toBeInTheDocument();
  });
  it("renders a correct number of topics", () => {
    render(repositoryCard);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
  it("doesn't render a list if there are no topics", () => {
    render(
      <RepositoryCard
        repoName="My repo"
        repoDescription="My repo description"
        repoStars={200}
        repoTopics={[]}
        repoUpdateDate="2011-10-05T14:48:00.000Z"
      />
    );
    expect(screen.queryByRole("list")).toBeNull();
  });
  it("renders a correctly formated date", () => {
    render(repositoryCard);
    expect(
      screen.getByText(new Date("2011-10-05T14:48:00.000Z").toDateString())
    ).toBeInTheDocument();
  });
});
