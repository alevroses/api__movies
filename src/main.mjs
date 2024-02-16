import { getTrending } from "./API/get-trending.mjs";
import { container } from "./nodes.mjs";
import { getDetails } from "./API/get-details.mjs";

const showTrending = async () => {
  const data = await getTrending();
  const movieId = [];

  const results = data.results;
  console.log(results);

  results.map(movie => {
    const section =
      document.createElement("section");

    const figure = document.createElement("figure");
    const img = document.createElement("img");

    const divArrows = document.createElement("div");
    const aLeft = document.createElement("a");
    const imgLeftIcon =
      document.createElement("img");
    const aRight = document.createElement("a");
    const imgRightIcon =
      document.createElement("img");

    const divDetails =
      document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    const divHidden = document.createElement("div");

    movieId.push(movie.id);

    section.classList.add("container__div");
    figure.classList.add("banner");
    img.classList.add("banner__movie");

    divArrows.classList.add("orientation");
    aLeft.classList.add("left");
    aRight.classList.add("right");

    divDetails.classList.add("details");
    h1.classList.add("details__title");
    p.classList.add("details__genre");

    divHidden.classList.add("hidden");

    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    imgLeftIcon.setAttribute(
      "src",
      "./img/chevron-left-icon.svg"
    );
    imgRightIcon.setAttribute(
      "src",
      "./img/chevron-right-icon.svg"
    );

    figure.append(img);
    section.append(figure);
    container.append(section);

    aLeft.append(imgLeftIcon);
    aRight.append(imgRightIcon);
    divArrows.append(aLeft, aRight);
    section.append(divArrows);

    (async () => {
      const details = await getDetails(movieId);

      h1.textContent =
        `${movie.title} ${movie.release_date}`.toUpperCase();

      for (const key in details.genres) {
        p.textContent +=
          `# ${details.genres[key].name} `.toUpperCase();
      }
    })();

    divDetails.append(h1);
    divDetails.append(p);
    section.append(divDetails);
  });
};

const showDetails = async id => {
  const data = await getDetails(id);
  return data;
};

/* showDetails(18); */

showTrending();

/* 
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
*/
