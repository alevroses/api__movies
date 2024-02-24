import { showTrending } from "./utils/show-trending.mjs";
/* import {
  show,
  hide,
  showContent,
  hideContent,
} from "./utils/show-hide-details.mjs"; */
import { showPopular } from "./utils/show-popular.mjs";
import { generatePageNumbers } from "./utils/create-page-numbers.mjs";

showTrending();
showPopular();

generatePageNumbers();

/* show.addEventListener("click", showContent);
hide.addEventListener("click", hideContent); */
