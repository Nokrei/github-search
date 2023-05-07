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
    <div className="h-52 w-full overflow-y-auto rounded bg-white p-2 font-semibold shadow">
      <h2 className="text-xl text-sky-500">{repoName}</h2>
      <p className="break-words py-2 text-sm font-normal">{repoDescription}</p>
      {repoTopics?.length > 0 && (
        <ul className="flex flex-wrap gap-1 pb-2">
          {repoTopics?.map((topic) => {
            return (
              <li
                className="w-10 min-w-fit rounded-2xl bg-sky-100 p-1 px-2 text-center text-sm text-sky-600 shadow-sm"
                key={topic}
              >
                {topic}
              </li>
            );
          })}
        </ul>
      )}
      <div className="flex gap-2 text-sm text-gray-400">
        <div className="flex items-center ">
          <AiOutlineStar size={15} />
          <span className="ps-1"> {repoStars}</span>
        </div>
        {repoUpdateDate && (
          <span>{new Date(repoUpdateDate).toDateString()}</span>
        )}
      </div>
    </div>
  );
};
