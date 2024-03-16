import { autorization } from "./authorization.mjs";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: autorization,
  },
};

const getDiscoverMovie = async (
  /* page = 1,
  genre = 28,
  year = 2024,
  rating = 9,
  sort = "popularity.desc" */
  page = 1,
  genre,
  year,
  rating,
  sort
) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${genre}&year=${year}&vote_average.gte=${rating}&sort_by=${sort}`,
    options
  );

  /* console.log(response); */

  const data = await response.json();

  return data;
};

/* 
popularity.desc
popularity.asc
*/

export { getDiscoverMovie };
