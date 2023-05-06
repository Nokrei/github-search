import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Data = {
  user: string;
};

type Props = {
  searchType: string;
  searchQuery: string;
};

export const useGithubApi = ({ searchType, searchQuery }: Props) => {
  const { data, isLoading, isError, error } = useQuery<Data, Error>({
    queryKey: ["githubApi", searchQuery],
    queryFn: async () => {
      console.log(`Fetching GitHub data for ${searchType}`);
      const response = await axios.get(
        `https://api.github.com/search/${searchType}?q=${searchQuery}`
      );
      const dataFound = response.data;
      return dataFound;
    },
  });

  return { data, isLoading, error, isError };
};
