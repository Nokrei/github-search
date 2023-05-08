import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDebounce } from "use-debounce";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  description: string;
  defaultValue?: string;
  defaultCategory?: string;
};

export const Searcher = ({
  description,
  defaultValue,
  defaultCategory,
}: Props) => {
  const [queryValue, setQueryValue] = useState(defaultValue || "");
  const [category, setCategory] = useState(defaultCategory || "users");
  const [debauncedQuery] = useDebounce(queryValue, 1000);
  const router = useRouter();

  useEffect(() => {
    // on landing page, we only want to push if there's a debauncedQuery
    if (defaultValue === undefined && debauncedQuery) {
      router.push(`/results/${category}?query=${debauncedQuery}`);
    }

    // on results - only if the value is different to the prefilled
    if (
      defaultValue &&
      (debauncedQuery !== defaultValue || defaultCategory !== category)
    ) {
      router.push(`/results/${category}?query=${debauncedQuery}`);
    }
  }, [debauncedQuery, router, category, defaultValue, defaultCategory]);

  return (
    <div>
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
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
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
