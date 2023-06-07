import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// rate limit is 30 with auth, 10 without
const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const githubData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { category, searchQuery, page, perPage } = req.query;
    const { data } = await axios.get(
      `https://api.github.com/search/${category}?q=${searchQuery}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      }
    );
    res.status(200).json(data);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default githubData;
