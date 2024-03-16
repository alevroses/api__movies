import { getMoviesGenres } from "../API/get-movies-genres.mjs";

const createFilters = async () => {
  const data = await getMoviesGenres();

  const selectGenres = document.querySelector(".genres");
  const selectYears = document.querySelector(".year");
  const selectRating = document.querySelector(".rating");

  data.genres.forEach((genre) => {
    const option = document.createElement("option");
    option.textContent = genre.name;
    option.setAttribute("value", genre.id);

    selectGenres.append(option);
  });

  for (let i = 2024; i >= 1913; i--) {
    const option = document.createElement("option");
    option.textContent = i;
    option.setAttribute("value", i);

    selectYears.append(option);
  }

  for (let i = 1; i <= 9; i++) {
    const option = document.createElement("option");
    option.textContent = `${i}+`;
    option.setAttribute("value", i);

    selectRating.append(option);
  }
};

export { createFilters };
