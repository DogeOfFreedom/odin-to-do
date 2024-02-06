import { createProject } from "../objects/project";
import { getById, modifyName } from "./storageHelper";


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

let deleteProject = projectId => {
    let project = getProjectById(projectId);
    let index = projects.indexOf(project);
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
}

let getProjectById = id => {
    for(let project of projects) {
        if(project.id === id) {
            return project;
        }
    }
}

let deleteToDo = (projectId, todo) => {
    if(projectId === "home") {
        let index = home_project.todos.indexOf(todo);
        home_project.todos.splice(index, 1);
        localStorage.setItem("home", JSON.stringify(home_project));
    } else {
        let project = getProjectById(projectId);
        let index = project.todos.indexOf(todo);
        project.todos.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
    }
}

let updateProjectTodos = (projectId) => {
    if(projectId === "home") {
        localStorage.setItem("home", JSON.stringify(home_project));
    } else {
        localStorage.setItem("projects", JSON.stringify(projects));
    }
}

export { makeNewProject, updateProject, deleteProject, deleteToDo, updateProjectTodos, getProjectById, projects, home_project }