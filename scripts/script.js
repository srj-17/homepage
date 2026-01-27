import { projects } from "./data.js"
import { createProject } from "./utils.js"

const projectsContainer = document.querySelector(".projects")
projects.forEach(proj => {
    const project = createProject(proj)
    projectsContainer.appendChild(project)
});
console.log(projectsContainer)
