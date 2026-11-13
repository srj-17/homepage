import { projects, personalInfo } from "./data.js"
import { createProject, renderPersonalInfo } from "./utils.js"

renderPersonalInfo(personalInfo)

const projectsContainer = document.querySelector(".projects")
projects.forEach(proj => {
    const project = createProject(proj)
    projectsContainer.appendChild(project)
});
