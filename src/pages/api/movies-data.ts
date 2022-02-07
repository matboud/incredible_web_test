import type { NextApiHandler } from "next";
import resData from "./data/data.json";

// send json data to be fetched
const moviesData: NextApiHandler = async (request, response) => {
  response.json({ data: resData });
};

export default moviesData;
