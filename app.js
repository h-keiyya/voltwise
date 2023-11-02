"use strict";

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const portfolio = document.getElementById("portfolio");
const portfolioBtns = portfolio.querySelectorAll(".btn-portfolio");
const projects = portfolio.querySelectorAll("article");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

function filterProjects(e) {
  const filtered = e.target.dataset.filter;
  projects.forEach(project => {
    const projectCategories = project.getAttribute("data-filter").split(" ");
    if (filtered === "all" || projectCategories.includes(filtered)) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  portfolio.addEventListener("click", e => {
    if (e.target.classList.contains("btn-portfolio")) {
      // Remove the 'active' class from all buttons
      portfolioBtns.forEach(btn => btn.classList.remove("active"));
      // Add the 'active' class to the clicked button
      e.target.classList.add("active");
      filterProjects(e);
    }
  });

  const projectLinks = portfolio.querySelectorAll("a button");

  projectLinks.forEach(link => {
    link.addEventListener("click", e => {
      // Prevent the default behavior of the link
      e.preventDefault();

      // Get the id of the clicked link
      const projectId = e.target.parentElement.id;

      // Open project.html with different content based on the projectId
      window.open(`projects.html?id=${projectId}`, "_parent");
    });
  });
});
