/* const show = document.querySelector(".btn-show");
const hide = document.querySelector(".hide-btn"); */

const showContent = () => {
  const btnShowCont = document.querySelector(".btn-show");
  btnShowCont.style.display = "none";

  const sectionCont = document.querySelector(".main__section");
  sectionCont.style.display = "grid";

  const content = document.querySelector(".description");
  content.style.display = "block";

  const btnHideCont = document.querySelector(".hide-btn");
  btnHideCont.style.display = "block";
};

const hideContent = () => {
  const btnShowCont = document.querySelector(".btn-show");
  btnShowCont.style.display = "block";

  const sectionCont = document.querySelector(".main__section");
  sectionCont.style.display = "block";

  const content = document.querySelector(".description");
  content.style.display = "none";

  const btnHideCont = document.querySelector(".hide-btn");
  btnHideCont.style.display = "none";
};

export { /* show, hide, */ showContent, hideContent };
