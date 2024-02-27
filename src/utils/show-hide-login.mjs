const loginIcon = document.querySelector(".login");
const options = document.querySelector(".login__credentials");

const showHidenLogin = () => {
  loginIcon.addEventListener("click", () => {
    if (options.style.display === "grid") {
      /* console.log(options.style.display); */
      options.style.display = "none";
    } else {
      /* console.log(options.style.display); */
      options.style.display = "grid";
    }
  });
};

export { showHidenLogin };
