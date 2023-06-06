import Layout from "@/components/Layout";
import { Searcher } from "@/components/Organisms/Searcher";

export default function Home() {
  return (
    <Layout>
      <div className="flex h-full items-center justify-center">
        <Searcher description="Search for users or repositories" />
      </div>
    </Layout>
  );
}
