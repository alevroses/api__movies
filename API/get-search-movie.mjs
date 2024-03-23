import { api_key } from "./authorization.mjs";

const getSearchMovies = async (name) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${api_key}`
  );
  const data = await response.json();

  /* console.log(data); */
  return data;
};

export { getSearchMovies };
