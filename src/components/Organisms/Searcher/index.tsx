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

  // 1. user types in input field
  // 2. after user finishes typing they get pused to results route
  //   - need to update the router with what the user typed
  //   - then need to push the user to that route
  //   - when user is on results route, take what he typed from url and make a request to api
  // 3. when the user searches from results pages, search should also fire on category change
  //   - still need to update router, but can do it shallow - no need to push

  // useQuery({
  //   queryKey: ["pushToRoute", category, debauncedQuery],
  //   queryFn:
  //   enabled: !!debauncedQuery,
  //   refetchOnWindowFocus: false,
  // });

  // useEffect(() => {
  //   // on landing page, we only want to push if there's a debauncedQuery
  //   if (defaultValue === undefined && debauncedQuery) {
  //     router.push(`/results/${category}?query=${debauncedQuery}`);
  //   }

  //   // on results - only if the value is different to the prefilled
  //   if (
  //     defaultValue &&
  //     (debauncedQuery !== defaultValue || defaultCategory !== category)
  //   ) {
  //     router.push(`/results/${category}?query=${debauncedQuery}`);
  //   }
  // }, [debauncedQuery, router, category, defaultValue, defaultCategory]);

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
