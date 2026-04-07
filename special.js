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


// nav bar directions controller 
const items = document.querySelectorAll(".nav-item");
const indicator = document.querySelector(".indicator");

function moveIndicator(el) {
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
}

items.forEach(item => {
  item.addEventListener("click", function () {
    // remove active from all
    items.forEach(i => i.classList.remove("active"));

    // add active to clicked
    this.classList.add("active");

    // move indicator
    moveIndicator(this);

    // SAVE ACTIVE PAGE
    localStorage.setItem("activeNav", this.getAttribute("href"));
  });
});

// window.addEventListener("DOMContentloaded", ()
// => {
//   const currentPage = 
//   localStorage.getItem("activenav");

//   items.forEach(item => {
//     if (item.getAttribute("href") ===
//   currentPage) {
//     item.classList.add("active");
//     moveIndicator(item);
//   }
//   });
// });

// NAVBAR ACTIVE FIX
window.addEventListener("load", () => {
  const path = window.location.pathname;

  const navItems = document.querySelectorAll(".nav-item");

  // remove all active states
  navItems.forEach(item => item.classList.remove("active"));

  // detect PROFILE page (sign.html)
  if (path.includes("sign.html")) {
    document.getElementById("profileNav")?.classList.add("active");
  }

  // detect PRODUCT page
  if (path.includes("product.html")) {
    navItems[1]?.classList.add("active");
  }

  // detect HOME page
  if (path === "/" || path.includes("index.html")) {
    navItems[0]?.classList.add("active");
  }

  // detect CHAT page
  if (path.includes("chat.html")) {
    navItems[2]?.classList.add("active");
  }
});

