const login = document.querySelector(".section__icons.login");

const changeLogin = () => {
  const loginBtn = document.createElement("a");
  const signupBtn = document.createElement("a");
  loginBtn.textContent = "LOGIN";
  signupBtn.textContent = "SIGNUP";

  if (window.innerWidth > 739) {
    /* login.innerHTML = loginBtn.outerHTML; */
    login.innerHTML = "";
    loginBtn.setAttribute("href", "./navigation/login.html");
    /* loginBtn.href = "./navigation/login.html"; */

    login.append(loginBtn, signupBtn);
  }
};

export { changeLogin };
