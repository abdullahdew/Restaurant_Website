const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal Js

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image .image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-top", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header-btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header-card", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

ScrollReveal().reveal(".header-image-footer", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".menu-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".menu-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".banner-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".banner-content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".banner-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".customer-image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
