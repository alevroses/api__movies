const showContent = (event) => {
  const btnShowCont = event.currentTarget;
  const cardParent = btnShowCont.parentElement;
  cardParent.classList.add("shadow");

  cardParent.style.display = "grid";

  const content = cardParent.querySelector(".description");
  /* content.classList.remove("disabled"); */
  content.classList.add("actives");

  const btnHideCont = cardParent.querySelector(".hide-btn");
  btnHideCont.style.display = "block";

  btnShowCont.style.display = "none";
};

const hideContent = (event) => {
  const btnHideCont = event.currentTarget;
  const cardParent = btnHideCont.parentElement; /* description */

  const mainSection = cardParent.closest(".main__section");
  mainSection.classList.remove("shadow");

  const btnShowCont = mainSection.querySelector(".btn-show");
  setTimeout(() => {
    /* btnShowCont.style.opacity = 1; */
    btnShowCont.style.display = "block";
  }, 500);

  /* const content = mainSection.querySelector(".description"); */
  cardParent.classList.remove("actives");
};

export { showContent, hideContent };
