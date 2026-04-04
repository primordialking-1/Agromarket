const loginBtn = document.getElementById("loginBtttn");
const signupBtn = document.getElementById("signupBtttn");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginBtn.onclick = () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");

  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
};

signupBtn.onclick = () => {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");

  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
};