import Head from "next/head";
import { Header } from "./Molecules/Header";
import { Footer } from "./Molecules/Footer";

type Props = {
  title: string;
  description: string;
  children: any;
};

export default function Layout({ title, description, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="flex h-screen flex-col ">
        <Header />
        <main className="flex flex-1 flex-col p-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "Github Search",
  description: "Search for users and repositories",
};
