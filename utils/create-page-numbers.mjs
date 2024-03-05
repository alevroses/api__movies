import { getPopular } from "../API/get-popular.mjs";
import { showPopular } from "./show-popular.mjs";

const pagination = document.querySelector(".pagination");
const leftBtn = document.querySelector(".prevPageBtn");
const pageNumbers = document.querySelector(".pageNumbers");
const rightBtn = document.querySelector(".nextPageBtn");

const count = document.querySelector(".pagination-count span");

let currentPage = 1;
let totalPages = 5464;

const showPageData = async (page) => {
  const data = await getPopular(page);
  /* console.log(data); */
  return data;
};

const generatePageNumbers = () => {
  pageNumbers.innerHTML = "";

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const pageNumber = document.createElement("button");
    pageNumber.classList.add("pageNumber", "load");
    pageNumber.textContent = i;

    if (currentPage === i) {
      pageNumber.classList.add("active");
    }

    pageNumber.addEventListener("click", () => {
      currentPage = i;

      showPageData(currentPage);
      generatePageNumbers();
      showPopular();
    });

    pageNumbers.append(pageNumber);
  }
};

leftBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;

    count.textContent = `Page ${currentPage} of 5485`;

    showPageData(currentPage);
    generatePageNumbers();
    showPopular();
  }
});

rightBtn.addEventListener("click", () => {
  if (totalPages > currentPage) {
    currentPage++;

    count.textContent = `Page ${currentPage} of 5485`;

    showPageData(currentPage);
    generatePageNumbers();
    showPopular();
  }
});

/* generatePageNumbers(); */

export { showPageData, generatePageNumbers, currentPage };
