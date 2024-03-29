import { main } from "../nodes.mjs";
import { getDetails } from "../API/get-details.mjs";
import { getCast } from "../API/get-cast.mjs";
import { showContent, hideContent } from "./show-hide-details.mjs";
import { showPageData, currentPage } from "./create-page-numbers.mjs";

const showPopular = async () => {
  const data = await showPageData(currentPage);
  /* console.log(data); */

  const mainContainer = document.querySelector(".main__container");
  /* main.innerHTML = ""; */
  mainContainer.innerHTML = "";

  data.results.map((movie) => {
    const section = document.createElement("section");

    const divDetails = document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");

    const divQuality = document.createElement("div");
    const quality = document.createElement("p");

    const divMore = document.createElement("div");
    const h3 = document.createElement("h3");
    const rating = document.createElement("p");
    const span = document.createElement("span");
    const genres = document.createElement("p");
    const spanGenres = document.createElement("span");

    const btnShow = document.createElement("button");

    const description = document.createElement("section");
    const cast = document.createElement("p");
    const spanCast = document.createElement("span");
    const spanCastNames = document.createElement("span");
    const overview = document.createElement("p");
    const btnHide = document.createElement("button");

    // Clases
    section.classList.add("main__section");
    divDetails.classList.add("details-div");
    figure.classList.add("details__figure");

    divQuality.classList.add("div__quality");
    quality.classList.add("details__quality");

    divMore.classList.add("details__more");

    btnShow.classList.add("button-description", "btn-show");
    description.classList.add("description", "disabled");
    cast.classList.add("description__cast");
    overview.classList.add("description__overview");
    btnHide.classList.add("button-description", "hide-btn");

    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    quality.textContent = "FHD";
    h3.textContent = movie.title;

    window.innerWidth < 640
      ? (rating.textContent = `Rating: `)
      : (rating.textContent = `⭐ `);

    genres.textContent = "Genres: ";

    const votes = movie.vote_average.toFixed(1);
    span.textContent = votes;

    (async () => {
      const details = await getDetails(movie.id);
      const actors = await getCast(movie.id);

      details.genres.map((genre) => {
        spanGenres.textContent += `${genre.name} `;
      });

      genres.append(spanGenres);

      spanCast.textContent = "Cast: ";

      actors.cast.map((name, index) => {
        index < 5
          ? (spanCastNames.textContent += `${name.name}, `)
          : null;
      });

      cast.append(spanCast, spanCastNames);
    })();

    btnShow.textContent = "+ Description";
    btnShow.addEventListener("click", showContent);

    overview.textContent = movie.overview;

    btnHide.textContent = "- Hide";
    btnHide.addEventListener("click", hideContent);

    divQuality.append(quality);
    figure.append(img, divQuality);
    rating.append(span);
    divMore.append(h3, rating, genres);
    divDetails.append(figure, divMore);
    description.append(cast, overview, btnHide);
    section.append(divDetails, btnShow, description);

    mainContainer.append(section);
    /* main.append(section); */
  });
};

export { showPopular };
