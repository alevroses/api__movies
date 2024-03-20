const login = document.querySelector(".section__icons.login");

const changeLogin = () => {
  const loginBtn = document.createElement("a");
  const signupBtn = document.createElement("a");
  loginBtn.textContent = "LOGIN";
  signupBtn.textContent = "SIGNUP";

  if (window.innerWidth > 739) {
    /* login.innerHTML = loginBtn.outerHTML; */
    login.innerHTML = "";

    const locationHref = location.href.split("/");

    locationHref[locationHref.length - 1] === "index.html" ||
    locationHref[locationHref.length - 2] === "api__movies"
      ? loginBtn.setAttribute("href", "./navigation/login.html")
      : loginBtn.setAttribute("href", "./login.html");

    /* console.log(locationHref[locationHref.length - 1]); */

    /* loginBtn.setAttribute("href", "./navigation/login.html"); */
    /* loginBtn.href = "./navigation/login.html"; */

    login.append(loginBtn, signupBtn);
  }
};

export { changeLogin };
