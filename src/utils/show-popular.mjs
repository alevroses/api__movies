import { getPopular } from "../API/get-popular.mjs";
import { main } from "../nodes.mjs";
import { getDetails } from "../API/get-details.mjs";
import { getCast } from "../API/get-cast.mjs";

const showPopular = async () => {
  const data = await getPopular();
  console.log(data);

  data.results.map((movie) => {
    const section = document.createElement("section");

    const divDetails = document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");

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
    const overview = document.createElement("p");
    const btnHide = document.createElement("button");

    // Clases
    section.classList.add("main__section");
    divDetails.classList.add("details-div");
    figure.classList.add("details__figure");

    quality.classList.add("details__quality");

    divMore.classList.add("details__more");

    btnShow.classList.add("button-description", "btn-show");
    description.classList.add("description", "disabled");
    cast.classList.add("description__cast");
    overview.classList.add("description__overview");
    btnHide.classList.add("button-description", "hide-btn");

    /* console.log(movie.poster_path);
    console.log(movie.title); */

    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    quality.textContent = "FHD";
    h3.textContent = movie.title;
    rating.textContent = `Rating: `;
    genres.textContent = "Genres: ";

    const votes = movie.vote_average.toFixed(1);
    span.textContent = votes;

    (async () => {
      const details = await getDetails(movie.id);
      const actors = await getCast(movie.id);
      console.log("cast", actors);

      details.genres.map((genre) => {
        spanGenres.textContent += `${genre.name} `;
      });

      genres.append(spanGenres);

      actors.cast.map((name) => {
        spanCast.textContent = "Cast: ";
        cast.textContent += `${name.name}, `;
      });
    })();

    /* console.log(movie); */

    btnShow.textContent = "+ Description";

    cast.append(spanCast);
    overview.textContent = movie.overview;
    btnHide.textContent = "- Hide";

    figure.append(img);
    rating.append(span);
    divMore.append(h3, rating, genres);
    divDetails.append(figure, quality, divMore);
    description.append(cast, overview, btnHide);
    section.append(divDetails, btnShow, description);
    main.append(section);
  });
};

export { showPopular };
