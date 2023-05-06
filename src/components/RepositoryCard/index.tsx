import Image from "next/image";

type Props = {
  repoName: string;
  repoDescription: string;
  repoTopics: string[];
  repoStars: number;
  repoCreationDate: string;
};
export const RepositoryCard = ({
  repoName,
  repoDescription,
  repoTopics,
  repoStars,
  repoCreationDate,
}: Props) => {
  return (
    <div className="w-80 max-w-md rounded bg-white p-2 shadow">
      <h2>{repoName}</h2>
      <p>{repoDescription}</p>
      <div>
        {repoTopics.map((topic) => {
          return <span key={topic}>{topic}</span>;
        })}
      </div>
      <span>{repoStars}</span>
      <span>{repoCreationDate}</span>
    </div>
  );
};
