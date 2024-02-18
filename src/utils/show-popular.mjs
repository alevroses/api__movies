import { getPopular } from "../API/get-popular.mjs";
import { main } from "../nodes.mjs";

const showPopular = async () => {
  const data = await getPopular();
  console.log(data);

  data.results.map(movie => {
    console.log(movie.title);

    const section =
      document.createElement("section");

    const divDetails =
      document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");

    const quality = document.createElement("p");

    const divMore = document.createElement("div");
    const h3 = document.createElement("h3");
    const rating = document.createElement("p");
    const span = document.createElement("span");
    const genres = document.createElement("p");
    const spanGenres =
      document.createElement("span");

    const btnShow =
      document.createElement("button");

    const description =
      document.createElement("section");
    const cast = document.createElement("p");
    const spanCast = document.createElement("span");
    const overview = document.createElement("p");
    const btnHide =
      document.createElement("button");

    // Clases
    section.classList.add("main__section");
    divDetails.classList.add("details-div");
    figure.classList.add("details__figure");

    quality.classList.add("details__quality");

    divMore.classList.add("details__more");

    btnShow.classList.add(
      "button-description",
      "btn-show"
    );
    description.classList.add(
      "description",
      "disabled"
    );
    cast.classList.add("description__cast");
    overview.classList.add("description__overview");
    btnHide.classList.add(
      "button-description",
      "hide-btn"
    );
  });
};

export { showPopular };
