import { showTrending } from "./utils/show-trending.mjs";
/* import {
  show,
  hide,
  showContent,
  hideContent,
} from "./utils/show-hide-details.mjs"; */
import { showPopular } from "./utils/show-popular.mjs";
import { generatePageNumbers } from "./utils/create-page-numbers.mjs";
import { showSearchMovie } from "./utils/show-search-movie.mjs";

showTrending();
showPopular();

generatePageNumbers();
/* showSearchMovie(); */

/* show.addEventListener("click", showContent);
hide.addEventListener("click", hideContent); */
