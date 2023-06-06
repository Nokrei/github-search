import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-purple-900 p-3">
      <h1 className="text-2xl text-white">
        <Link href="/">KMMRCE </Link>
      </h1>
    </header>
  );
};
