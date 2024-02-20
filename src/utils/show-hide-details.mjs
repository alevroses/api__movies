const btnShow = document.querySelector(".btn-show");
const btnHide = document.querySelector(".hide-btn");

const showContent = () => {
  const btnShow = document.querySelector(".btn-show");
  btnShow.style.display = "none";

  const section = document.querySelector(".main__section");
  section.style.display = "grid";

  const content = document.querySelector(".description");
  content.style.display = "block";

  const btnHide = document.querySelector(".hide-btn");
  btnHide.style.display = "block";
};

const hideContent = () => {
  const btnShow = document.querySelector(".btn-show");
  btnShow.style.display = "block";

  const section = document.querySelector(".main__section");
  section.style.display = "block";

  const content = document.querySelector(".description");
  content.style.display = "none";

  const btnHide = document.querySelector(".hide-btn");
  btnHide.style.display = "none";
};

export { btnShow, btnHide, showContent, hideContent };
