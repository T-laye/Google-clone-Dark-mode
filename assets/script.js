"use strict";

// Body
const body = document.querySelector("body");

// Header
const nav_links = document.querySelector(".nav-items");
const sign_in = document.querySelector(".sign-in");
const dark_sign_in = document.querySelector(".sign-btn");
const app_icon = document.querySelector(".app-icon");
const dark_app_icon = document.querySelector(".dark-app-icon");

// Logo
const logo = document.querySelector(".logo");
const dark_logo = document.querySelector(".logo-dark");

// Search bar
const search = document.querySelector(".search");
const search_bar = document.querySelector(".search-bar");

// Search btns
const search_btn = document.querySelector(".search-btn");
const dark_btn = document.querySelector(".btn-dark");

// Lang section
const language = document.querySelector(".langs");

// Footer
const nigeria = document.querySelector(".nigeria");
const others = document.querySelector(".others");

// Dark mode button
const dark_mode_btn = document.querySelector(".mode");

dark_mode_btn.addEventListener("click", () => {
  //switch-btn
  dark_mode_btn.classList.toggle("mode-dark");
  if (dark_mode_btn.innerText === "Dark-Mode") {
    dark_mode_btn.innerText = "Light-mode";
  } else {
    dark_mode_btn.innerText = "Dark-Mode";
  }
  // body
  body.classList.toggle("dark-mode");
  // Header
  nav_links.classList.toggle("nav-items-dark");

  dark_sign_in.classList.toggle("dark-sign");

  app_icon.classList.toggle("hidden");
  dark_app_icon.classList.toggle("hidden");

  // Logo
  logo.classList.toggle("hidden");
  dark_logo.classList.toggle("hidden");

  search.classList.toggle("search-dark");
  search_bar.classList.toggle("search-bar-dark");

  // Search buttons
  search_btn.classList.toggle("hidden");
  dark_btn.classList.toggle("hidden");

  // Language
  language.classList.toggle("langs-dark");

  // Footer
  nigeria.classList.toggle("nigeria-dark");
  others.classList.toggle("others-dark");
});
