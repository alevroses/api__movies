import { autorization } from "./authorization.mjs";

const getPopular = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=33",
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

/* const getPopular = async (page) => {

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
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
}; */

export { getPopular };
