import { showHidenLogin } from "../utils/show-hide-login.mjs";
import {
  input,
  showSearchMovie,
} from "../utils/show-search-movie.mjs";

showHidenLogin();
/* showSearchMovie(); */

input.addEventListener("input", () => {
  const filmName = input.value.toLowerCase();

  /* if (filmName.length > 1) {
    showSearchMovie({
      name: filmName,
      star: "../img/star-icon.svg",
    });
  } */
});
