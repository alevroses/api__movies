import { showTrending } from "./utils/show-trending.mjs";
import {
  btnShow,
  btnHide,
  showContent,
  hideContent,
} from "./utils/show-hide-details.mjs";
import { showPopular } from "./utils/show-popular.mjs";

showTrending();

btnShow.addEventListener("click", showContent);
btnHide.addEventListener("click", hideContent);

showPopular();
