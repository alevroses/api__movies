const showContent = (event) => {
  console.log(event.currentTarget);
  const btnShowCont = event.currentTarget;
  console.log("Parent: ", btnShowCont.parentElement);
  const cardParent = btnShowCont.parentElement;
  cardParent.classList.add("shadow");

  cardParent.style.display = "grid";

  console.log("Selector: ", cardParent.querySelector(".description"));
  const content = cardParent.querySelector(".description");
  content.classList.remove("disabled");

  const btnHideCont = cardParent.querySelector(".hide-btn");
  btnHideCont.style.display = "block";

  btnShowCont.style.display = "none";
};

const hideContent = (event) => {
  console.log(event.currentTarget);
  const btnHideCont = event.currentTarget;
  console.log(btnHideCont.parentElement);
  const cardParent = btnHideCont.parentElement;
  cardParent.classList.add("disabled");

  console.log("main section: ", cardParent.closest(".main__section"));
  const mainSection = cardParent.closest(".main__section");
  /* mainSection.style.display = "block"; */
  mainSection.classList.remove("shadow");

  const btnShowCont = mainSection.querySelector(".btn-show");
  btnShowCont.style.display = "block";
};

export { /* show, hide, */ showContent, hideContent };
