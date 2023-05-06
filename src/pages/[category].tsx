import { useState } from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next/types";
import { useGithubApi } from "@/hooks/useGithubApi";
import { UserCard } from "@/components/UserCard";
import { RepositoryCard } from "@/components/RepositoryCard";
import Layout from "@/components/Layout";
import { Searcher } from "@/components/Searcher";

type Props = {
  category: string;
  query: string;
  page: number;
};

export default function Category({}: Props) {
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter();
  const { query, category, page } = router.query;
  const { data } = useGithubApi({
    searchType: category as string,
    searchQuery: query as string,
    page: pageNumber,
  });

  return (
    <Layout>
      <Searcher page={pageNumber} />
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
      {pageNumber}
      <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
    </Layout>
  );
}

// export async function getServerSideProps(context: NextPageContext) {
//   const { category, query, page } = context.query;

//   return { props: { category, query, page } };
// }
