import { getSearchTv } from "../API/get-search-tv.mjs";

const totalTv = document.querySelector(".total-shows");
const containerShows = document.querySelector(".container-shows");
const input = document.querySelector(".input");
let counter = 0;

const showSearchTv = async ({ name, star }) => {
  const data = await getSearchTv(name);

  containerShows.innerHTML = "";

  data.results.map((tv) => {
    counter++;
    totalTv.innerHTML = `SHOWS (${counter}) - VIEW ALL`;
  });

  data.results.slice(0, 3).map((tv) => {
    /* console.log(tv); */

    const date = tv.first_air_date.split("-")[0];
    const vote = tv.vote_average.toFixed(1);

    const showTv = `
      <div class="container-movie">
        <figure>
          <img 
            src="https://image.tmdb.org/t/p/w500${tv.poster_path}"
            alt=""
          />
          <span>HD</span>
        </figure>
        <div>
          <p>${tv.name} ${date}</p>
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

    containerShows.insertAdjacentHTML("beforeend", showTv);
  });
};

input.addEventListener("input", () => {
  const title = input.value.toLowerCase();

  const url = location.href;
  const item = url.split("m");
  const numberInString = item[item.length - 1];
  const number = parseInt(numberInString);
  /* console.log(url, item, numberInString, number); */

  if (
    title.length > 1 &&
    (location.href.endsWith("api__movies/") ||
      location.href.endsWith("index.html") ||
      location.href.endsWith(`#item${number}`))
  ) {
    showSearchTv({
      name: title,
      star: "./img/star-icon.svg",
    });
  } else if (title.length > 1 && location.href.endsWith("login.html")) {
    /* disabled.style.display = "grid"; */

    showSearchTv({
      name: title,
      star: "../img/star-icon.svg",
    });
  } else {
    counter = 0;
  }
});

export { showSearchTv };
