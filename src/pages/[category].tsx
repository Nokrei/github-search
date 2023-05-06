import { NextPageContext } from "next/types";
import { useGithubApi } from "@/hooks/useGithubApi";
import { useRouter } from "next/router";
import { UserCard } from "@/components/UserCard";
import { RepositoryCard } from "@/components/RepositoryCard";
import Layout from "@/components/Layout";
import { Searcher } from "@/components/Searcher";

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
    <Layout>
      <Searcher />
      <div className="grid grid-cols-3 gap-3">
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
                  repoUpdateDate={repo.updated_at}
                />
              );
            })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { category, query } = context.query;

  return { props: { category: category, query: query } };
}
