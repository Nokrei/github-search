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
  const { query, category } = router.query;
  const resultsPerPage = 9;
  const { data, isLoading, isPreviousData, isFetching, isError, error } =
    useGithubApi({
      searchType: category as string,
      searchQuery: query as string,
      page: pageNumber,
      resultsPerPage: resultsPerPage,
    });
  const totalPages = Math.floor(
    (data?.total_count + resultsPerPage - 1) / resultsPerPage
  );
  console.log(totalPages);

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
        <button
          className="rounded bg-blue-600 p-2 px-3  text-white duration-100 hover:bg-blue-500 disabled:bg-blue-200"
          onClick={() => {
            setPageNumber((old) => Math.max(old - 1, 0));
          }}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          className="rounded bg-blue-600 p-2 px-3 text-white  duration-100 hover:bg-blue-500 disabled:bg-blue-200"
          onClick={() => {
            if (!isPreviousData) {
              setPageNumber((old) => old + 1);
            }
          }}
          disabled={isPreviousData || pageNumber >= totalPages}
        >
          Next
        </button>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps(context: NextPageContext) {
//   const { category, query, page } = context.query;

//   return { props: { category, query, page } };
// }
