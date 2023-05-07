import { useState } from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next/types";
import { useGithubApi } from "@/hooks/useGithubApi";
import { UserCard } from "@/components/UserCard";
import { RepositoryCard } from "@/components/RepositoryCard";
import Layout from "@/components/Layout";
import { Searcher } from "@/components/Searcher";
import { Button } from "@/components/button";

type Props = {
  category: string;
  query: string;
  page: number;
};

export default function Category({}: Props) {
  const router = useRouter();

  const [pageNumber, setPageNumber] = useState(1);
  const resultsPerPage = 9;

  const { query, category } = router.query;

  const { data, isLoading, isPreviousData, isError, error } = useGithubApi({
    searchType: category as string,
    searchQuery: query as string,
    page: pageNumber,
    resultsPerPage: resultsPerPage,
  });
  const totalPages = Math.floor(
    ((data?.total_count as number) + resultsPerPage - 1) / resultsPerPage
  );

  return (
    <Layout>
      <Searcher page={pageNumber} />
      {isError && error?.message}
      {isLoading ? (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="grid flex-1 grid-cols-1 gap-3 py-5 lg:grid-cols-2 xl:grid-cols-3">
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
      )}
      <div className="flex justify-center gap-3">
        <Button
          buttonText="Prev"
          onButtonClick={() => {
            setPageNumber((old) => Math.max(old - 1, 0));
          }}
          isButtonDisabled={pageNumber === -1}
        />
        <Button
          buttonText="Next"
          onButtonClick={() => {
            if (!isPreviousData) {
              setPageNumber((old) => old + 1);
            }
          }}
          isButtonDisabled={isPreviousData || pageNumber >= totalPages}
        />
      </div>
    </Layout>
  );
}

// export async function getServerSideProps(context: NextPageContext) {
//   const { category, query, page } = context.query;

//   return { props: { category, query, page } };
// }
