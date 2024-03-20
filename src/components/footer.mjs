import { footer, footerContainer } from "../nodes.mjs";

const showFooter = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const locationHref = location.href.split("/");
    const linkOne = "./components/footer.html";
    const linkTwo = "../components/footer.html";

    if (locationHref[locationHref.length - 1] === "index.html") {
      fetch(linkOne)
        .then((response) => response.text())
        .then((html) => (footerContainer.innerHTML = html));
    } else {
      /* fetch(linkTwo)
        .then((response) => response.text())
        .then((html) => (footerContainer.innerHTML = html)); */

      const test = `
        <figure class="footer-figure">
          <img class="figure-img" src="../img/lookmovie-logo.png" alt="" />
        </figure>
        <span class="footer-contact">Contact Us</span>
        <p class="footer-info">
          Watch Online is a free movie and TV shows streaming site. With over
          50,000 movies and TV Shows we let you watch each movie online
          without having to register or pay. You can also bookmark or share
          each full movie and episode to watch it later if you want.
        </p>
  `;

      /* footerContainer.insertAdjacentElement("beforeend", test); */
      footerContainer.innerHTML = test;
    }

    /* fetch("./components/footer.html")
      .then((response) => response.text())
      .then((html) => (footerContainer.innerHTML = html)); */
  });
};

export { showFooter };
