import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import Layout from "@/components/Layout";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <div className="flex">
            <div className="flex w-14 items-center">
              <AiFillGithub size={40} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Github Searchbar</h2>
              <p className="text-gray-500">
                Search users or repositories below
              </p>
            </div>
          </div>
          <div className="flex">
            <input
              type="seaarch"
              className="w-full border"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <select
              name="options"
              className="border"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="users">Users</option>
              <option value="repositories">Repositories</option>
            </select>
          </div>
        </div>
      </div>
    </Layout>
  );
}
