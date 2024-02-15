import { getTrending } from "./API/get-trending.mjs";
import { createMovies } from "./utils/create-movies.mjs";
import { figure } from "./nodes.mjs";

const showTrending = async () => {
  const data = await getTrending();
  console.log(data);

  /* data.results.map(movie => {
    console.log(movie.poster_path);
  }); */
  createMovies(data, figure);
};

showTrending();

/* 
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
*/
