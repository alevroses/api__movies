import { getSearchMovies } from "../API/get-search-movie.mjs";

const input = document.querySelector(".input");
const disabled = document.querySelector(
  ".section__show--movies.disabled"
);
const containerMovies = document.querySelector(
  ".container-movies"
);

const showSearchMovie = async (name) => {
  const data = await getSearchMovies(name);

  containerMovies.innerHTML = "";

  data.results.slice(0, 3).map((movie) => {
    console.log(movie.release_date.split("-")[0]);

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

  if (filmName.length > 0) {
    disabled.style.display = "grid";

    showSearchMovie(filmName);
  } else {
    disabled.style.display = "none";
  }
});

export { showSearchMovie };
