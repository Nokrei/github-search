import { AiOutlineStar } from "react-icons/ai";

type Props = {
  repoName: string;
  repoDescription: string;
  repoTopics: string[];
  repoStars: number;
  repoUpdateDate: string;
};
export const RepositoryCard = ({
  repoName,
  repoDescription,
  repoTopics,
  repoStars,
  repoUpdateDate,
}: Props) => {
  return (
    <div className="h-40 w-full overflow-y-auto rounded bg-white p-2 shadow">
      <h2 className="text-xl text-blue-500">{repoName}</h2>
      <p className="break-words">{repoDescription}</p>
      <div className="flex flex-wrap gap-1">
        {repoTopics?.map((topic) => {
          return (
            <span
              className="w-10 min-w-fit rounded-2xl bg-sky-200 p-1 px-2 text-center text-sm text-sky-600"
              key={topic}
            >
              {topic}
            </span>
          );
        })}
      </div>
      <div className="flex gap-2">
        <div className="flex items-center">
          <AiOutlineStar size={20} />
          {repoStars}
        </div>
        {repoUpdateDate && (
          <span>{new Date(repoUpdateDate).toDateString()}</span>
        )}
      </div>
    </div>
  );
};
