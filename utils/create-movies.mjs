// import { section } from "../nodes.mjs";

const createMovies = (data, figure) => {
  /* const figure = document.createElement("figure");
  figure.classList.add("banner"); */

  const img = document.createElement("img");
  img.classList.add("banner__movie");

  img.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`
  );

  figure.append(img);
  /* section.append(figure); */

  /* data.results.map(movie => {
    const figure = document.createElement("figure");
    figure.classList.add("banner");

    const img = document.createElement("img");
    img.classList.add("banner__movie");


    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    figure.append(img);
    section.append(figure);
  }); */
};

export { createMovies };
