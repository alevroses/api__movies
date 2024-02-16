import { getTrending } from "./API/get-trending.mjs";
import { container } from "./nodes.mjs";
import { getDetails } from "./API/get-details.mjs";

const showTrending = async () => {
  const data = await getTrending();

  const results = data.results;
  console.log(results);

  //container.innerHTML = "";
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
    const divDetailsOthers =
      document.createElement("div");
    const rating = document.createElement("p");
    const quality = document.createElement("p");
    const runtime = document.createElement("p");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const overview = document.createElement("p");
    const buttonWatch =
      document.createElement("button");

    const divHidden = document.createElement("div");

    /* movieId.push(movie.id); */

    section.classList.add("container__div");
    figure.classList.add("banner");
    img.classList.add("banner__movie");

    divArrows.classList.add("orientation");
    aLeft.classList.add("left");
    aRight.classList.add("right");

    divDetails.classList.add("details");
    divDetailsOthers.classList.add(
      "details__others"
    );
    rating.classList.add("others");
    quality.classList.add("others", "highlight");
    runtime.classList.add("others");
    h1.classList.add("details__title");
    p.classList.add("details__genre");
    overview.classList.add("details__overview");
    buttonWatch.classList.add("watch");

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
      const details = await getDetails(movie.id);
      /* console.log("idxd", movieId); */
      console.log("viendo", details);

      const date = movie.release_date.split("-");
      const year = date[0];

      h1.textContent =
        `${movie.title} (${year})`.toUpperCase();

      const voteAverage =
        details.vote_average.toFixed(1);
      rating.textContent = `🔥 ${voteAverage}`;
      quality.textContent = "FHD";
      runtime.textContent = `⏱ ${details.runtime}`;

      for (const key in details.genres) {
        p.textContent +=
          `# ${details.genres[key].name} `.toUpperCase();

        overview.textContent = `${details.overview}`;
      }
    })();

    buttonWatch.textContent = "Watch now";

    divDetails.append(h1);
    divDetailsOthers.append(rating);
    divDetailsOthers.append(quality);
    divDetailsOthers.append(runtime);
    divDetails.append(divDetailsOthers);
    divDetails.append(p);
    divDetails.append(overview);

    section.append(divDetails);
    section.append(buttonWatch);
    section.append(divHidden);
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
