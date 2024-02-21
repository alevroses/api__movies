/* const show = document.querySelector(".btn-show");
const hide = document.querySelector(".hide-btn"); */

import { main } from "../nodes.mjs";

const showContent = (event) => {
  console.log(event.currentTarget);
  const btnShowCont = event.currentTarget;
  console.log("Parent: ", btnShowCont.parentElement);
  const cardParent = btnShowCont.parentElement;

  /* console.log(cardParent.closest(".main__section"));
  const mainSection = cardParent.closest(".main__section");
  mainSection.style.display = "grid"; */
  cardParent.style.display = "grid";

  console.log("Selector: ", cardParent.querySelector(".description"));
  const content = cardParent.querySelector(".description");
  content.classList.remove("disabled");

  const btnHideCont = cardParent.querySelector(".hide-btn");
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

  /* const btnShowCont = event.querySelector(""); */
  console.log(event.currentTarget);
  const btnHideCont = event.currentTarget;
  console.log(btnHideCont.parentElement);
  const cardParent = btnHideCont.parentElement;
  cardParent.classList.add("disabled");

  console.log("main section: ", cardParent.closest(".main__section"));
  const mainSection = cardParent.closest(".main__section");
  /* mainSection.style.display = "block"; */

  const btnShowCont = mainSection.querySelector(".btn-show");
  btnShowCont.style.display = "block";

  /* const btnShowCont =  */

  /* const btnHideCont = event.currentTarget;
  const cardParent = btnHideCont.parentElement;

  const content = cardParent.querySelector(".description");
  content.classList.add("disabled");

  const mainSection = cardParent.closest(".main__section");
  mainSection.style.display = "block";

  const btnShowCont = cardParent.querySelector(".btn-show");
  btnShowCont.style.display = "block";

  btnHideCont.style.display = "none"; */
};

export { /* show, hide, */ showContent, hideContent };
