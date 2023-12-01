import { observeElements } from "./intersection.js"

function show() {
  let projectsHidden = document.getElementById("projects-hidden");
  let more = document.querySelector(".show-more");
  let less = document.querySelector(".show-less");
  if (projectsHidden.style.display === "none") {
    projectsHidden.style = "display: grid";
    more.style.display = "none";
    less.style.display = "block";
  } else {
    projectsHidden.style.display = "none";
  }
}
function less() {
  let less = document.querySelector(".show-less");
  let more = document.querySelector(".show-more");
  let projectsHidden = document.getElementById("projects-hidden");
  if (projectsHidden.style.display === "grid") {
    projectsHidden.style.display = "none";
    less.style.display = "none";
    more.style.display = "block";
  } else {
    projectsHidden.style.display = "none";
  }
}

const blogHidden = document.querySelector('.stories-hidden');
const blogShows = document.querySelector('.stories-shows');
const arrRight = document.querySelector('.arr-right');
const arrLeft = document.querySelector('.arr-left');

arrRight.addEventListener('click', () => {
  blogHidden.classList.toggle('active');
  
  blogHidden.style.transform = "translateX(0)";
  blogShows.style.transform = "translateX(-250%)";
});
arrLeft.addEventListener('click', () => {
  blogHidden.style.transform = "translateX(250%)";
  blogShows.style.transform = "translateX(0)";
});
// =======================================
// Observe InterSection API
const sectionElements = document.querySelectorAll("section");

observeElements(sectionElements);
