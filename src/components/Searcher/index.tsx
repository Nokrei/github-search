import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDebounce } from "use-debounce";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  page?: number;
  description: string;
};

export const Searcher = ({ page, description }: Props) => {
  const [queryValue, setQueryValue] = useState("");
  const [category, setCategory] = useState("users");
  const [debauncedQuery] = useDebounce(queryValue, 1000);
  const router = useRouter();
  useEffect(() => {
    debauncedQuery && router.push(`/${category}?query=${debauncedQuery}`);
  }, [debauncedQuery, page]);

  return (
    <div>
      <div className="flex">
        <div className="flex w-14 items-center">
          <AiFillGithub size={40} />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Github Searchbar</h2>
          <p className="text-gray-500">{description} </p>
        </div>
      </div>
      <div className="flex w-80">
        <input
          type="seaarch"
          className="w-full border"
          placeholder="Start typing to search..."
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
        />
        <select
          name="options"
          className="border"
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
