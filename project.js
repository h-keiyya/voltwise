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
    "8kwh-nakuru": {
      title: "8KW Off-grid installed in Nakuru",
      description:
        "Recently Installed this 8kw off-grid system in Nakuru. The system comprised; 12 pieces 450w jinko solar panels, 8 pieces 200ah felicity solar batteries, 1 unit 8Kw must hybrid inverter, Solar mounting structure,battery rack, Wiring &control accessories",
      supports: [
        'A 65" TV set',
        "CCTV System",
        "LIghting (indoor & outdoors)",
        "Dispenser",
        "Fridge (24 hours)",
        "Microwave",
      ],
      images: ["images/8Kw-nakuru.jpeg"],
    },
    "solar-abc": {
      title: "5KvA Office Backup at the ABC Place, Westlands Nairobi",
      description:
        "We recently installed this 5KvA Backup System at an office in the ABC Place Westlands. The client was in distress after being frustrated by grid power which kept going off frequently. The System Comprised; 2 units 48V 4.4Kwh LiFeP04 felicity lithium batteries, 1 unit 48V 5KvA felicity hybrid inverter, Wiring & control accessories",
      supports: [
        "6 Desktop computers",
        "4 Laptops",
        "A photocopy machine",
        "A water dispenser machine",
        "A double door fridge",
        "Lighting",
      ],
      images: ["images/5kva-abc.jpeg"],
    },
    "300l-kayahwe": {
      title: "300L Water Heater Installation at Kayahwe Villas, Nairobi",
      description:
        "A recently installed 300L water heater system at Kayahwe Villas,Kilimani, Nairobi. The system",
      supports: [
        "6 Desktop computers",
        "4 Laptops",
        "A photocopy machine",
        "A water dispenser machine",
        "A double door fridge",
        "Lighting",
      ],
      images: ["images/300l-kayahwe.jpeg", "images/300L-Kayahwe.jpeg"],
    },
    "5kva-thika": {
      title: "5KW Solar back-up system in Thika",
      description:
        "This 5KvA solar back-up system was installed in Thika Greens. It is a 5kw solar energy back-up system integrated to the grid. The system comprises; 6 pieces 550w Jinko mono solar panels, 2 units 48v 5kwh Lithium batteries, 1 unit 5KvA felicity hybrid inverter, Wiring & accessories",
      supports: [
        '65" Tv set',
        "Lighting (indoors & outdoors)",
        "2 fridges",
        "Microwave",
        "Small water pump",
      ],
      images: ["images/5kw-thika.jpeg"],
    },
    "submersive-pump": {
      title: "Solar Water Pumping System",
      description:
        "This 5KvA solar back-up system was installed in Thika Greens. It is a 5kw solar energy back-up system integrated to the grid. The system comprises; 6 pieces 550w Jinko mono solar panels, 2 units 48v 5kwh Lithium batteries, 1 unit 5KvA felicity hybrid inverter, Wiring & accessories",
      supports: [
        '65" Tv set',
        "Lighting (indoors & outdoors)",
        "2 fridges",
        "Microwave",
        "Small water pump",
      ],
      images: ["images/pumping.jpeg", "images/pumping-2.jpeg"],
    },
  };

  // Load content based on the project ID
  if (projectsData.hasOwnProperty(projectId)) {
    const project = projectsData[projectId];
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");
    const projectSupports = document.getElementById("project-supports");
    const projectImagesContainer = document.getElementById(
      "project-images-container"
    );

    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;

    // Clear previous images
    projectImagesContainer.innerHTML = "";

    // Create and append image elements
    project.images.forEach(imageUrl => {
      const projectImage = document.createElement("img");
      projectImage.className = "project-image";
      projectImage.src = imageUrl;
      projectImage.alt = "Project Image";
      projectImagesContainer.appendChild(projectImage);
    });

    // Clear previous supports
    projectSupports.innerHTML = "";

    // Create and append list items for supports
    project.supports.forEach(support => {
      const supportListItem = document.createElement("li");
      supportListItem.textContent = support;
      projectSupports.appendChild(supportListItem);
    });
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
