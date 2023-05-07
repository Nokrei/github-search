import Image from "next/image";

type Props = {
  userName: string;
  userAvatar: string;
  userLink: string;
};
export const UserCard = ({ userName, userAvatar, userLink }: Props) => {
  return (
    <div className="h-40 w-full rounded bg-white p-2 shadow">
      <div className="flex gap-2">
        {userAvatar && (
          <Image
            width={20}
            height={20}
            src={userAvatar}
            alt={`${userName} avatar`}
            className="rounded-full"
          />
        )}

        <a
          href={userLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-500"
        >
          Github
        </a>
        <p className="font-semibold text-gray-500">{userName}</p>
      </div>
    </div>
  );
};
