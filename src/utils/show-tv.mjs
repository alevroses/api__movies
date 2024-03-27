import { getTv } from "../API/get-tv.mjs";
import { currentPageTv, showPageTv } from "./create-page-tv.mjs";
/* import { showPageTv } from "./create-page-numbers.mjs";
import { currentPage } from "./create-page-numbers.mjs"; */

const showTv = async () => {
  const data = await getTv();
  /*const lol = await showPageTv(currentPage); */
  const lol = await showPageTv(currentPageTv);

  const main = document.querySelector(".main-shows");
  const bgImg = document.querySelector(".background");
  const container = document.querySelector(".main-shows__container");

  container.innerHTML = "";

  lol.results.map((show) => {
    const tv = `
      <section class="section__tv-show">
        <img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="" />
        <div class="tv-show__details">
          <h6>${show.name}</h6>
          <h5>Season 2, Episode 1</h5>
          <p>
            ${show.overview}
          </p>
          <time>
            <strong>Mar</strong>
            <span>22</span>
            <em>2024</em>
          </time>
        </div>
      </section>
    `;

    container.insertAdjacentHTML("beforeend", tv);
  });

  /* main.style.marginBottom = `${container.offsetHeight - 153}px`; */
  /* main.style.marginBottom = `${
    container.offsetHeight - bgImg.offsetHeight / 1.4
  }px`; */
};

export { showTv };
