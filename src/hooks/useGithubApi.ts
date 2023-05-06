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

type Data = {
  items: User[] | Repository[];
};

type Props = {
  searchType: string;
  searchQuery: string;
  page: number;
};

export const useGithubApi = ({ searchType, searchQuery, page }: Props) => {
  const { data, isLoading, isError, error } = useQuery<Data, Error>({
    queryKey: ["githubApi", searchQuery, page],
    queryFn: async () => {
      console.log(`Fetching GitHub data for ${searchType}`);
      const response = await axios.get(
        `https://api.github.com/search/${searchType}?q=${searchQuery}&page=${page}`
      );
      const dataFound = response.data;
      return dataFound;
    },
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, isError };
};
