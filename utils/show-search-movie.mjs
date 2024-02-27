import { getSearchMovies } from "../API/get-search-movie.mjs";

const fatherSearch = document.querySelector(
  ".search.disabled"
);
const searchIcon = document.querySelector(
  ".section__icon--search"
);
const input = document.querySelector(".input");
const totalMovies = document.querySelector(".total-movies");
const sectionSearchMovie = document.querySelector(
  ".section__search--movie"
);
const disabled = document.querySelector(
  ".section__show--movies.disabled"
);
const containerMovies = document.querySelector(
  ".container-movies"
);

const sectionSearch = document.querySelector(
  ".section__search.disabled"
);
const closeIcon = document.querySelector(".close-icon");

let counter = 0;

const showSearchMovie = async (name) => {
  const data = await getSearchMovies(name);

  containerMovies.innerHTML = "";

  data.results.map((movies) => {
    counter++;

    totalMovies.innerHTML = `MOVIES (${counter}) - VIEW ALL`;
    /* console.log(counter, movies.title); */
  });

  data.results.slice(0, 3).map((movie) => {
    const date = movie.release_date.split("-")[0];
    const vote = movie.vote_average.toFixed(1);

    const showMovie = `
      <div class="container-movie">
        <figure>
          <img 
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            alt=""
          />
          <span>HD</span>
        </figure>
        <div>
          <p>${movie.title} ${date}</p>
          <div class="movie-details">
            <figure class="star-icon">
              <img
                class="star-img"
                src="./img/star-icon.svg"
                alt=""
              />
            </figure>
            <p>${vote}</p>
          </div>
        </div>
      </div>
    `;

    containerMovies.insertAdjacentHTML(
      "beforeend",
      showMovie
    );
  });
};

input.addEventListener("input", () => {
  const filmName = input.value.toLowerCase();

  if (filmName.length > 1) {
    disabled.style.display = "grid";

    showSearchMovie(filmName);
  } else {
    counter = 0;
    disabled.style.display = "none";
  }
});

searchIcon.addEventListener("click", () => {
  sectionSearch.classList.remove("disabled");
  searchIcon.style.display = "none";
  fatherSearch.classList.remove("disabled");
});

closeIcon.addEventListener("click", () => {
  input.value = "";

  sectionSearch.classList.add("disabled");
  searchIcon.style.display = "block";
  fatherSearch.classList.add("disabled");
  disabled.style.display = "none";
});

export { showSearchMovie };
