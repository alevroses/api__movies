import { sliderContainer } from "../nodes.mjs";

let currentIndex = 0;

const slideTo = (index) => {
  console.log(sliderContainer.getBoundingClientRect().width);
  const imageWidth = sliderContainer.getBoundingClientRect().width;
  const transformXValue = -imageWidth * index;

  sliderContainer.style.transform = `translateX(${transformXValue}px)`;
  sliderContainer.style.transition = "transform 0.9s ease-in-out";

  if (index === (0 || 19)) {
    sliderContainer.style.transition = "none";
  }
  /* console.log(currentIndex); */
};

const slideNext = () => {
  currentIndex++;

  if (currentIndex >= 20) {
    currentIndex = 0;
  }

  slideTo(currentIndex);
};

const slidePrev = () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = 19;
  }

  slideTo(currentIndex);
};

setInterval(slideNext, 5000);

/* aRight.addEventListener("click", slideNext);
aLeft.addEventListener("click", slidePrev); */

export { slideTo, slideNext, slidePrev };
