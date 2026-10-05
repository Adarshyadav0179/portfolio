// Elements select karein
const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

// 1. Hamburger button par click hone par menu open/close ho
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// 2. Kisi bhi link par click karte hi menu apne aap band ho jaye
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});