import { useState } from "react";
import { useRouter } from "next/router";
import { useDebouncedCallback } from "use-debounce";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  description: string;
};

export const Searcher = ({ description }: Props) => {
  const [category, setCategory] = useState("users");
  const router = useRouter();

  const debouncedChangeText = useDebouncedCallback(
    (value) => router.push(`/results/${category}?query=${value}`),
    1000
  );

  return (
    <div className="max-w-full">
      <div className="flex pb-3">
        <div className="flex w-14 items-center">
          <AiFillGithub size={40} />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Github Searchbar</h2>
          <p className="text-gray-500">{description} </p>
        </div>
      </div>
      <div className="flex w-96 max-w-full gap-2">
        <input
          type="seaarch"
          className="w-full border p-2 shadow-sm"
          placeholder="Start typing to search..."
          onChange={(e) => debouncedChangeText(e.target.value)}
        />
        <select
          name="options"
          className="border shadow-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="users">Users</option>
          <option value="repositories">Repositories</option>
        </select>
      </div>
    </div>
  );
};
