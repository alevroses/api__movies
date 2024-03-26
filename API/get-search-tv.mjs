import { api_key } from "./authorization.mjs";

const getSearchTv = async (name) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${name}&api_key=${api_key}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export { getSearchTv };
