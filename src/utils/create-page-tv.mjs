import { getTv } from "../API/get-tv.mjs";
import { showTv } from "./show-tv.mjs";

const leftBtn = document.querySelector(".prevPageBtn");
const pageNumbers = document.querySelector(".pageNumbers");
const rightBtn = document.querySelector(".nextPageBtn");

const count = document.querySelector(".pagination-count span");

let currentPageTv = 1;
let totalPages = 5464;

const showPageTv = async (page) => {
  const data = await getTv(page);

  return data;
};

const generatePageTv = () => {
  pageNumbers.innerHTML = "";

  const startPage = Math.max(1, currentPageTv - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const pageNumber = document.createElement("button");
    pageNumber.classList.add("pageNumber", "load");
    pageNumber.textContent = i;

    if (currentPageTv === i) {
      pageNumber.classList.add("active");
      count.textContent = `Page ${currentPageTv} of 5485`;
    }

    pageNumber.addEventListener("click", () => {
      currentPageTv = i;

      showPageTv(currentPageTv);
      generatePageTv();
      showTv();
    });

    pageNumbers.append(pageNumber);
  }
};

leftBtn.addEventListener("click", () => {
  if (currentPageTv > 1) {
    currentPageTv--;

    count.textContent = `Page ${currentPageTv} of 5485`;

    showPageTv(currentPageTv);
    generatePageTv();
    showTv();
  }
});

rightBtn.addEventListener("click", () => {
  if (totalPages > currentPageTv) {
    currentPageTv++;

    count.textContent = `Page ${currentPageTv} of 5485`;

    showPageTv(currentPageTv);
    generatePageTv();
    showTv();
  }
});

export { showPageTv, generatePageTv, currentPageTv };
