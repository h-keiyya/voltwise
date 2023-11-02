"use strict";

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const projectId = getParameterByName("id");
  const projectContentDiv = document.getElementById("project-content");

  // Define your project data based on project IDs
  const projectsData = {
    "5kva-kitusuru": {
      title: "5Kva Backup System in Kitusuru",
      description:
        "We installed a backup system for a client in Kitusuru blah blah blah",
      technologies: 'Two 65" TV, 1 Fridge, Laptop',
      image: "images/construction.png",
    },
    "heater-kayahwe": {
      title: "300L Solar Water Heater Project in Kayahwe Villas Nairobi",
      description: "Description for Solar Water Heater Project...",
      technologies: "Solar Thermal Panels, Water Tank, Heat Exchanger",
      image: "path/to/heater-kayahwe-image.jpg",
    },
    // Add more project IDs and data as needed
  };

  // Load content based on the project ID
  if (projectsData.hasOwnProperty(projectId)) {
    const project = projectsData[projectId];
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");
    const projectTechnologies = document.getElementById("project-technologies");
    const projectImage = document.getElementById("project-image");

    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectTechnologies.textContent = project.technologies;
    projectImage.src = project.image;
  } else {
    // Handle the case where the project ID is not found
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Project not found.";
    projectContentDiv.appendChild(errorMessage);
  }
});

// Function to get query parameter by name
function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
