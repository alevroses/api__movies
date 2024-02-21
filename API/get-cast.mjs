import { autorization } from "./authorization.mjs";

const getCast = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: autorization,
      },
    }
  );
  const data = await response.json();
  return data;
};

export { getCast };
