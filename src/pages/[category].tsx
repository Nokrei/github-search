import { NextPageContext } from "next/types";
import { useGithubApi } from "@/hooks/useGithubApi";
import { useRouter } from "next/router";

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

  return <div>{category === "users" ? <p>Users</p> : <p>Repositories</p>}</div>;
}

export async function getServerSideProps(context: NextPageContext) {
  const { category, query } = context.query;

  return { props: { category: category, query: query } };
}
