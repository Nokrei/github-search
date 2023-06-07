import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

export type User = {
  id: number;
  avatar_url: string;
  login: string;
  html_url: string;
};

export type Repository = {
  id: number;
  name: string;
  description: string;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
};

type Item = User | Repository;

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
    queryKey: ["githubApi", searchQuery, page, searchType],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/githubData?category=${searchType}&searchQuery=${searchQuery}&page=${page}&perPage=${resultsPerPage}`
      );

      return data;
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return { data, isLoading, error, isError, isPreviousData };
};
