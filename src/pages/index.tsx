import { AiFillGithub } from "react-icons/ai";
import Layout from "@/components/Layout";
import { Searcher } from "@/components/Searcher";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center">
        <Searcher />
      </div>
    </Layout>
  );
}
