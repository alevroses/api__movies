/* import { backToTop } from "../nodes.mjs"; */

const top = () => {
  const backToTop = document.querySelector(".backtotop");

  backToTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

export { top };
