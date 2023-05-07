import { useState } from "react";
import { useRouter } from "next/router";
import { useGithubApi } from "@/hooks/useGithubApi";
import { UserCard } from "@/components/UserCard";
import { RepositoryCard } from "@/components/RepositoryCard";
import Layout from "@/components/Layout";
import { Searcher } from "@/components/Searcher";
import { Pagination } from "@/components/Pagination";

const resultsPerPage = 9;

export default function Category() {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(1);

  const { query, category } = router.query as {
    query: string;
    category: string;
  };

  const { data, isLoading, isPreviousData, isError, error } = useGithubApi({
    searchType: category,
    searchQuery: query,
    page: pageNumber,
    resultsPerPage: resultsPerPage,
  });
  const totalPages = Math.floor(
    ((data?.total_count as number) + resultsPerPage - 1) / resultsPerPage
  );

  return (
    <Layout title={`Github Search | ${category} | ${query}`}>
      <Searcher
        description="Search users or repositories below"
        defaultValue={query}
        defaultCategory={category}
      />
      {isError && error?.message}
      {isLoading ? (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="grid flex-1 grid-cols-1 gap-3 py-5 lg:grid-cols-2 xl:grid-cols-3">
          {data?.items.map((item) => {
            if ("avatar_url" in item) {
              return <UserCard key={item.id} user={item} />;
            }
            return <RepositoryCard key={item.id} repository={item} />;
          })}
        </div>
      )}
      <Pagination
        goToNextPage={() => {
          setPageNumber((old) => old + 1);
        }}
        goToPrevPage={() => {
          if (!isPreviousData) {
            setPageNumber((old) => Math.max(old - 1, 0));
          }
        }}
        isNextButtonDisabled={isPreviousData || pageNumber >= totalPages}
        isPrevButtonDisabled={pageNumber === 1}
      />
    </Layout>
  );
}
