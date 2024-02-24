const pagination = document.querySelector(".pagination");
const leftBtn = document.querySelector(".prevPageBtn");
const pageNumbers = document.querySelector(".pageNumbers");
const rightBtn = document.querySelector(".nextPageBtn");

let currentPage = 1;
let totalPages = 5464;

const showContent = (page) => {};

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

      generatePageNumbers();
    });

    pageNumbers.append(pageNumber);
  }
};

leftBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    generatePageNumbers();
  }
});

rightBtn.addEventListener("click", () => {
  if (totalPages > currentPage) {
    currentPage++;
    generatePageNumbers();
  }
});

/* generatePageNumbers(); */

export { generatePageNumbers };
