import { AiOutlineStar } from "react-icons/ai";
import type { Repository } from "@/hooks/useGithubApi";

type Props = {
  repository: Repository;
};

export const RepositoryCard = ({ repository }: Props) => {
  const { description, name, stargazers_count, topics, updated_at } =
    repository;

  return (
    <div className="h-52 w-full overflow-y-auto rounded bg-white p-2 font-semibold shadow">
      <h2 className="text-xl text-sky-500">{name}</h2>
      <p className="break-words py-2 text-sm font-normal">{description}</p>
      {topics?.length > 0 && (
        <ul className="flex flex-wrap gap-1 pb-2">
          {topics?.map((topic) => {
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
          <span className="ps-1"> {stargazers_count}</span>
        </div>
        {updated_at && <span>{new Date(updated_at).toDateString()}</span>}
      </div>
    </div>
  );
};
