import { getMoviesGenres } from "../API/get-movies-genres.mjs";
import { categories, dropdowm } from "../nodes.mjs";

const showMoviesGenres = async () => {
  const data = await getMoviesGenres();
  const categoryList = document.querySelector(".category-list");

  categoryList.innerHTML = "";

  data.genres.forEach((genre) => {
    const list = document.createElement("li");
    const ancla = document.createElement("a");
    ancla.textContent = genre.name.toUpperCase();

    ancla.setAttribute("href", "");

    list.append(ancla);
    categoryList.append(list);
  });

  dropdowm.addEventListener("click", () => {
    categories.classList.toggle("categories-active");
  });
};

export { showMoviesGenres };
