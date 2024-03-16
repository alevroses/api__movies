import { getMoviesGenres } from "../API/get-movies-genres.mjs";
import { categories, dropdowm } from "../nodes.mjs";

const showMoviesGenres = async () => {
  const data = await getMoviesGenres();
  const categoryList = document.querySelector(".category-list");
  /* const select = document.querySelector(".genres"); */

  categoryList.innerHTML = "";

  data.genres.forEach((genre) => {
    /* Dropdown */
    const list = document.createElement("li");
    const ancla = document.createElement("a");
    ancla.textContent = genre.name.toUpperCase();

    ancla.setAttribute("href", "");

    list.append(ancla);
    categoryList.append(list);

    /* Select Genres */
    /* const option = document.createElement("option");
    option.textContent = genre.name;
    option.setAttribute("value", genre.id);

    select.append(option); */
  });

  dropdowm.addEventListener("click", () => {
    categories.classList.toggle("categories-active");
  });
};

export { showMoviesGenres };
