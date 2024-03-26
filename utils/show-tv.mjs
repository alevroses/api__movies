import { getTv } from "../API/get-tv.mjs";

const showTv = async () => {
  const data = await getTv();
  const container = document.querySelector(".main-shows__container");

  data.results.map((show) => {
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
};

export { showTv };
