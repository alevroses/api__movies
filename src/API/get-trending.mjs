import { autorization } from "./authorization.mjs";

const getTrending = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
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

export { getTrending };
