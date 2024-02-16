import { autorization } from "./authorization.mjs";

const getDetails = async movie_id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: autorization,
      },
    }
  );
  const data = await response.json();
  return data
};

export { getDetails };
