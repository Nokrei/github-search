import Image from "next/image";
import type { User } from "@/hooks/useGithubApi";

type Props = {
  user: User;
};
export const UserCard = ({ user }: Props) => {
  const { avatar_url, html_url, login } = user;

  return (
    <div className="h-40 w-full rounded bg-white p-2 shadow">
      <div className="flex gap-2">
        {avatar_url && (
          <Image
            width={20}
            height={20}
            style={{ width: 20, height: 20 }}
            src={avatar_url}
            alt={`${login} avatar`}
            className="rounded-full"
          />
        )}

        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-500"
        >
          Github
        </a>
        <p className="font-semibold text-gray-500">{login}</p>
      </div>
    </div>
  );
};
