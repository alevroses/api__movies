import { getTv } from "../API/get-tv.mjs";
import { top } from "../components/back-to-top.mjs";
import { showFooter } from "../components/footer.mjs";
import { changeLogin } from "../utils/change-login.mjs";
import { showHidenLogin } from "../utils/show-hide-login.mjs";
import { showMoviesGenres } from "../utils/show-movies-genres.mjs";
import { input, showSearchMovie } from "../utils/show-search-movie.mjs";
import { showSearchTv } from "../utils/show-search-tv.mjs";
import { showTv } from "../utils/show-tv.mjs";
/* import { showTv } from "../utils/show-tv.mjs"; */

/* showSearchTv(); */

showHidenLogin();
showMoviesGenres();
changeLogin();

/* showFooter();
top(); */

getTv();
showTv();
