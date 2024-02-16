import { showTrending } from "./utils/show-trending.mjs";
import {
  btnShow,
  btnHide,
  showContent,
  hideContent,
} from "./utils/show-hide-details.mjs";

showTrending();

btnShow.addEventListener("click", showContent);
btnHide.addEventListener("click", hideContent);
