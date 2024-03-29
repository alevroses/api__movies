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
import { showMoviesGenres } from "./utils/show-movies-genres.mjs";
import { top } from "./components/back-to-top.mjs";
import { showFooter } from "./components/footer.mjs";
import { changeLogin } from "./utils/change-login.mjs";
import { createFilters } from "./utils/createFilters.mjs";
import { getDiscoverMovie } from "./API/get-discover-movie.mjs";

/* Constantes ------- */

showTrending();
showPopular();

generatePageNumbers();
showHidenLogin();

showFooter();
top();
showMoviesGenres();

changeLogin();
createFilters();

/* Test  */
/* getDiscoverMovie(); */
