const login = document.querySelector(".section__icons.login");

const changeLogin = () => {
  console.log(window.innerWidth);
  console.log(login);

  const loginBtn = document.createElement("button");
  const signupBtn = document.createElement("button");
  loginBtn.textContent = "LOGIN";
  signupBtn.textContent = "SIGNUP";

  if (window.innerWidth > 739) {
    /* login.innerHTML = loginBtn.outerHTML; */
    login.innerHTML = ""
    login.append(loginBtn, signupBtn)

    console.log("xd");
  }
};

export { changeLogin };
