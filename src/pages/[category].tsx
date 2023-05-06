import { NextPageContext } from "next/types";
import { useGithubApi } from "@/hooks/useGithubApi";
import { useRouter } from "next/router";
import { UserCard } from "@/components/UserCard";
import { RepositoryCard } from "@/components/RepositoryCard";

type Props = {
  category: string;
  query: string;
};

export default function Category({ category, query }: Props) {
  const router = useRouter();

  const { data } = useGithubApi({
    searchType: category,
    searchQuery: query,
  });

  return (
    <div className="grid grid-cols-5 gap-3">
      {category === "users"
        ? data?.items.map((user) => {
            return (
              <UserCard
                key={user.id}
                userAvatar={user.avatar_url}
                userName={user.login}
                userLink={user.html_url}
              />
            );
          })
        : data?.items.map((repo) => {
            return (
              <RepositoryCard
                key={repo.id}
                repoName={repo.name}
                repoDescription={repo.description}
                repoTopics={repo.topics}
                repoStars={repo.stargazers_count}
                repoCreationDate={repo.created_at}
              />
            );
          })}
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { category, query } = context.query;

  return { props: { category: category, query: query } };
}
