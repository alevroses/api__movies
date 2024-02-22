const showContent = (event) => {
  const btnShowCont = event.currentTarget;
  const cardParent = btnShowCont.parentElement;
  cardParent.classList.add("shadow");

  cardParent.style.display = "grid";

  const content = cardParent.querySelector(".description");
  content.classList.remove("disabled");

  const btnHideCont = cardParent.querySelector(".hide-btn");
  btnHideCont.style.display = "block";

  btnShowCont.style.display = "none";
};

const hideContent = (event) => {
  const btnHideCont = event.currentTarget;
  const cardParent = btnHideCont.parentElement;
  cardParent.classList.add("disabled");

  const mainSection = cardParent.closest(".main__section");
  /* mainSection.style.display = "block"; */
  mainSection.classList.remove("shadow");

  const btnShowCont = mainSection.querySelector(".btn-show");
  btnShowCont.style.display = "block";
};

export { showContent, hideContent };
