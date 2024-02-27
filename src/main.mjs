import { showTrending } from "./utils/show-trending.mjs";
import { showPopular } from "./utils/show-popular.mjs";
import { generatePageNumbers } from "./utils/create-page-numbers.mjs";

import { showSearchMovie } from "./utils/show-search-movie.mjs";
import { getSearchTv } from "./API/get-search-tv.mjs";
import { showSearchTv } from "./utils/show-search-tv.mjs";
import { showHidenLogin } from "./utils/show-hide-login.mjs";

showTrending();
showPopular();

generatePageNumbers();
showHidenLogin();

/* show.addEventListener("click", showContent);
hide.addEventListener("click", hideContent); */
