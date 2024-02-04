import { createProject } from "../objects/project";
import { getById, modifyName } from "./storageHelper";
import { populateProjectList } from "../sidebar";


let projects = [];
let home_project = createProject("home");

if(localStorage.getItem("home") !== null) {
    home_project = JSON.parse(localStorage.getItem("home"));
}

if(localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
}

let makeNewProject = element => {
    let { id, title } = extractFromProjectForm(element);
    let new_project = createProject(id, title);
    projects.push(new_project);
    localStorage.setItem("projects", JSON.stringify(projects));
    populateProjectList();
}

let extractFromProjectForm = element => {
    let title = String(element.children[0].value);
    title = title.trim();
    let id = modifyName(projects, title);
    return { id, title }
}

let updateProject = element => {
    let { title } = extractFromProjectForm(element);
    let id = element.id;
    let project = getById(projects, id);
    project.title = title;
}

let deleteProject = project => {
    let index = projects.indexOf(project);
    projects.splice(index, 1);
}

let getProjectList = () => {
    return projects;
}

export { makeNewProject, updateProject, deleteProject, getProjectList, projects, home_project }