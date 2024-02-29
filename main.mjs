import { showTrending } from "./utils/show-trending.mjs";
import { showPopular } from "./utils/show-popular.mjs";
import { generatePageNumbers } from "./utils/create-page-numbers.mjs";

import {
  closeIcon,
  counter,
  disabled,
  fatherSearch,
  input,
  searchIcon,
  sectionSearch,
  showSearchMovie,
} from "./utils/show-search-movie.mjs";
import { getSearchTv } from "./API/get-search-tv.mjs";
import { showSearchTv } from "./utils/show-search-tv.mjs";
import { showHidenLogin } from "./utils/show-hide-login.mjs";

/* Constantes ------- */

showTrending();
showPopular();

generatePageNumbers();
showHidenLogin();

/* Test  */

/* input.addEventListener("input", () => {
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
}); */

/* 
show.addEventListener("click", showContent);
hide.addEventListener("click", hideContent); 
*/
