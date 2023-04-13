// mobile side nav toggler

const openNavBtn = document.getElementById("openNavBtn");
const closeNavBtn = document.getElementById("closeNavBtn");
const sideNav = document.getElementById("sideNav");
const mainContent = document.getElementById("mainContent");

let isNavOpen = false;

openNavBtn.addEventListener("click", () => {
  if (isNavOpen) {
    closeNav();
  } else {
    openNav();
  }
  console.log(isNavOpen);
});

closeNavBtn.addEventListener("click", () => {
  if (isNavOpen) {
    closeNav();
  } else {
    openNav();
  }
  console.log(isNavOpen);
});

function openNav() {
  sideNav.style.width = "250px";
  closeNavBtn.style.display = "block";
  openNavBtn.style.display = "none";
  isNavOpen = true;
}

function closeNav() {
  sideNav.style.width = "0";
  closeNavBtn.style.display = "none";
  openNavBtn.style.display = "block";
  isNavOpen = false;
}

// gsap.to(".heading-primary", {
//   text: "Escape to nature's serenity",
//   ease: "power1.in",
//   duration: 4,
// });
