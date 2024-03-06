import { footer } from "../nodes.mjs";

const showFooter = () => {
  document.addEventListener("DOMContentLoaded", () => {
    /* let footer = document.querySelector(".footer"); */

    fetch("./components/footer.html")
      .then((response) => response.text())
      .then((html) => (footer.innerHTML = html));
  });
};

export { showFooter };
