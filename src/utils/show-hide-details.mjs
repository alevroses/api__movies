/* const show = document.querySelector(".btn-show");
const hide = document.querySelector(".hide-btn"); */

const showContent = (event) => {
  const btnShowCont = event.currentTarget;
  const cardContainer = btnShowCont.parentElement;

  /* const sectionCont = document.querySelector(".main__section");
  sectionCont.style.display = "grid"; */
  const mainSection = cardContainer.closest(".main__section");
  mainSection.style.display = "grid";

  const content = cardContainer.querySelector(".description");
  content.classList.remove("disabled");

  const btnHideCont = cardContainer.querySelector(".hide-btn");
  btnHideCont.style.display = "block";

  btnShowCont.style.display = "none";
};

const hideContent = (event) => {
  /* const btnShowCont = document.querySelector(".btn-show");
  btnShowCont.style.display = "block";

  const sectionCont = document.querySelector(".main__section");
  sectionCont.style.display = "block";

  const content = document.querySelector(".description");
  content.style.display = "none";

  const btnHideCont = document.querySelector(".hide-btn");
  btnHideCont.style.display = "none"; */

  const btnHideCont = event.currentTarget;
  const cardContainer = btnHideCont.parentElement;

  const content = cardContainer.querySelector(".description");
  content.classList.add("disabled");

  /* const sectionCont = document.querySelector(".main__section");
  sectionCont.style.display = "block"; */
  const mainSection = cardContainer.closest(".main__section");
  mainSection.style.display = "block";

  const btnShowCont = cardContainer.querySelector(".btn-show");
  btnShowCont.style.display = "block";

  btnHideCont.style.display = "none";
};

export { /* show, hide, */ showContent, hideContent };
