import { footer, footerContainer } from "../nodes.mjs";

const showFooter = () => {
  document.addEventListener("DOMContentLoaded", () => {
    fetch("./components/footer.html")
      .then((response) => response.text())
      .then((html) => (footerContainer.innerHTML = html));
  });
};

export { showFooter };
