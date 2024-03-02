import { getSearchMovies } from "../API/get-search-movie.mjs";

const fatherSearch = document.querySelector(".search.disabled");
const searchIcon = document.querySelector(".section__icon--search");
const input = document.querySelector(".input");
const totalMovies = document.querySelector(".total-movies");
const sectionSearchMovie = document.querySelector(
  ".section__search--movie"
);
const disabled = document.querySelector(
  ".section__show--movies.disabled"
);
const containerMovies = document.querySelector(".container-movies");

const sectionSearch = document.querySelector(
  ".section__search.disabled"
);
const closeIcon = document.querySelector(".close-icon");

const loginCredentials = document.querySelector(".login__credentials");

let counter = 0;

const showSearchMovie = async ({ name, star }) => {
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
                src=${star}
                alt=""
              />
            </figure>
            <p>${vote}</p>
          </div>
        </div>
      </div>
    `;

    containerMovies.insertAdjacentHTML("beforeend", showMovie);
  });
};

input.addEventListener("input", () => {
  const filmName = input.value.toLowerCase();

  const url = location.href;
  const item = url.split("m");
  const numberInString = item[item.length - 1];
  const number = parseInt(numberInString);
  /* console.log(url, item, numberInString, number); */

  if (
    filmName.length > 1 &&
    (location.href.endsWith("api__movies/") ||
      location.href.endsWith("index.html") ||
      location.href.endsWith(`#item${number}`))
  ) {
    disabled.style.display = "grid";

    showSearchMovie({
      name: filmName,
      star: "./img/star-icon.svg",
    });
  } else if (
    filmName.length > 1 &&
    location.href.endsWith("login.html")
  ) {
    disabled.style.display = "grid";
    /* console.log("testing...."); */

    showSearchMovie({
      name: filmName,
      star: "../img/star-icon.svg",
    });
  } else {
    counter = 0;
    disabled.style.display = "none";
  }
});

searchIcon.addEventListener("click", () => {
  sectionSearch.classList.remove("disabled");
  searchIcon.style.display = "none";
  fatherSearch.classList.remove("disabled");

  loginCredentials.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  input.value = "";

  sectionSearch.classList.add("disabled");
  searchIcon.style.display = "block";
  fatherSearch.classList.add("disabled");
  disabled.style.display = "none";
});

export {
  fatherSearch,
  searchIcon,
  input,
  totalMovies,
  sectionSearchMovie,
  disabled,
  containerMovies,
  sectionSearch,
  closeIcon,
  counter,
  showSearchMovie,
};
