import { getTrending } from "../API/get-trending.mjs";
import { container } from "../nodes.mjs";
import { getDetails } from "../API/get-details.mjs";

const showTrending = async () => {
  const data = await getTrending();

  const results = data.results;

  container.innerHTML = "";
  let increase = 0;
  let decrease = 21;

  results.map((movie) => {
    const section = document.createElement("section");

    const figure = document.createElement("figure");
    const img = document.createElement("img");

    const divArrows = document.createElement("div");
    const aLeft = document.createElement("a");
    const imgLeftIcon = document.createElement("img");
    const aRight = document.createElement("a");
    const imgRightIcon = document.createElement("img");

    const divDetails = document.createElement("div");
    const divDetailsOthers = document.createElement("div");
    const rating = document.createElement("div");
    const ratingIcon =
      document.createElement("img"); /* New */
    const ratingScore = document.createElement("p"); /* New */

    const quality = document.createElement("div");
    const qualityType = document.createElement("p"); /* New */

    const runtime = document.createElement("div");
    const runtimeIcon =
      document.createElement("img"); /* New */
    const runtimeData = document.createElement("p"); /* New */

    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const overview = document.createElement("p");
    const buttonWatch = document.createElement("button");

    const divHidden = document.createElement("div");

    increase += 1;
    decrease -= 1;

    section.setAttribute("id", `item${increase}`);

    section.classList.add("container__div");
    figure.classList.add("banner");
    img.classList.add("banner__movie");

    divArrows.classList.add("orientation");
    aLeft.classList.add("left");
    aRight.classList.add("right");

    divDetails.classList.add("details");
    divDetailsOthers.classList.add("details__others");

    rating.classList.add("others");
    ratingIcon.classList.add("rating-icon", "icon"); /* New */
    ratingScore.classList.add(
      "rating-score",
      "value"
    ); /* New */

    quality.classList.add("others", "highlight");
    qualityType.classList.add("quality-type"); /* New */

    runtime.classList.add("others");
    runtimeIcon.classList.add(
      "runtime-icon",
      "icon"
    ); /* New */
    runtimeData.classList.add(
      "runtime-data",
      "value"
    ); /* New */

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

    if (decrease === 20) {
      aLeft.setAttribute("href", `#item${decrease}`);
    } else {
      aLeft.setAttribute("href", `#item${increase - 1}`);
    }

    if (increase === 20) {
      increase = 0;

      aRight.setAttribute("href", `#item${increase + 1}`);
    } else {
      aRight.setAttribute("href", `#item${increase + 1}`);
    }

    figure.append(img);
    section.append(figure);
    container.append(section);

    aLeft.append(imgLeftIcon);
    aRight.append(imgRightIcon);
    divArrows.append(aLeft, aRight);
    section.append(divArrows);

    (async () => {
      const details = await getDetails(movie.id);

      const date = movie.release_date.split("-");
      const year = date[0];

      h1.textContent =
        `${movie.title} (${year})`.toUpperCase();

      const voteAverage = details.vote_average.toFixed(1);
      /* rating.textContent = `🔥 ${voteAverage}`; */
      ratingIcon.setAttribute("src", "./img/star-icon.svg");
      ratingScore.textContent = `${voteAverage}`;
      rating.append(ratingIcon, ratingScore);

      qualityType.textContent = "FHD";
      quality.append(qualityType);

      /* runtime.textContent = `⏱ ${details.runtime}`; */
      runtimeIcon.setAttribute("src", "./img/clock-icon.svg");
      runtimeData.textContent = `${details.runtime}`;
      runtime.append(runtimeIcon, runtimeData);

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

export { showTrending };
