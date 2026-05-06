"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const h1 = document.querySelector("h1");
const header = document.querySelector("header");
const message = document.createElement("div");
const section1 = document.querySelector("#section--1");
const btnScrollTo = document.querySelector(".btn--scroll-to");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Scrooling

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Page Navigation

//Event Delegation
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////
// hover on menu
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

addEventListener("mouseover", handleHover.bind(0.5));
addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////
// Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  if (!clicked) return;

  //Remove active class
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  //Activate tab
  clicked.classList.add("operations__tab--active");

  //Activate content area
  console.log(`.operations__content--${clicked.dataset.tab}`);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////////////////////////////////
// Cookie

// message.classList.add("cookie-message");

// message.innerHTML =
//   'We use cookie for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

// header.append(message);

// document
//   .querySelector(".btn--close--cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

///////////////////////////////////////
// Alert

// const alertH1 = function () {
//   alert("addEventListener: Greate! you are reading the heading :D");
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
