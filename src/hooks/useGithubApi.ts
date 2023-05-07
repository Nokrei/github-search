import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
  id: number;
  avatar_url: string;
  login: string;
  html_url: string;
};

type Repository = {
  id: number;
  name: string;
  description: string;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
};

type Item = User & Repository;

type Data = {
  items: Item[];
  total_count: number;
};

type Props = {
  searchType: string;
  searchQuery: string;
  resultsPerPage: number;
  page: number;
};

// rate limit is 30 with auth, 10 without
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const useGithubApi = ({
  searchType,
  searchQuery,
  page,
  resultsPerPage,
}: Props) => {
  const { data, isLoading, isError, error, isPreviousData } = useQuery<
    Data,
    Error
  >({
    queryKey: ["githubApi", searchQuery, page],
    queryFn: async () => {
      console.log(`Fetching GitHub data for ${searchType}`);
      const response = await axios.get(
        `https://api.github.com/search/${searchType}?q=${searchQuery}&per_page=${resultsPerPage}&page=${page}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      const dataFound = response.data;
      console.log({ dataFound });

      return dataFound;
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return { data, isLoading, error, isError, isPreviousData };
};
