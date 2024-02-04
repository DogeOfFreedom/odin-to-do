import { createProject, addToDo, deleteToDo, printOutToDos } from "./objects/project";
import { createToDo, changePriority } from "./objects/todo";
import { createNote } from "./objects/note";
import { populateProjectList } from "./sidebar";

let notes = [];
let home_project = createProject("home");
let projects = [];

if(localStorage.getItem("notes") !== null) {
    notes = JSON.parse(localStorage.getItem("notes"));
}

if(localStorage.getItem("home") !== null) {
    home_project = JSON.parse(localStorage.getItem("home"));
}

if(localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
}


let makeNewToDo = (element) => {
    let title = element.children[0].value;
    let description = element.children[1].value;
    let dueDate = element.children[2].value;
    
    let priority_div = element.children[3];
    let low_priority_btn = priority_div.children[0];
    let high_priority_btn = priority_div.children[1];
    let priority = "";

    if(low_priority_btn["data-selected"] === true) {
        priority = "low";
    } 
    else if(high_priority_btn["data-selected"] === true) {
        priority = "high";
    }
    else {
        priority = "none";
    }

    let new_to_do = createToDo(title, description, dueDate, priority);

    // choose which project to add todo to depending on which option in the sidebar is selected
    let targetProject = chooseProject();
    addToDo(targetProject, new_to_do);
    if(targetProject.title === "home") {
        localStorage.setItem("home", JSON.stringify(home_project));
    } else {
        localStorage.setItem("projects", JSON.stringify(projects));
    }
}

let chooseProject = () => {
    let project_options = document.querySelectorAll(".project-option");
    for(let project_option of project_options) {
        if(project_option.getAttribute("selected") === "true") {
            let chosen_project = projects.filter(x => x.title === project_option.getAttribute("value"))[0]
            return chosen_project; 
        }
    }
    return home_project;
}

let makeNewProject = (element) => {
    let title = String(element.children[0].value);
    let new_project = createProject(title);
    projects.push(new_project);
    localStorage.setItem("projects", JSON.stringify(projects));
    populateProjectList();

    // Cleanse project name
    // project_name = project_name.trim();
    // project_name = modifyName(existing_projects, project_name);
}

let deleteProject = project => {
    let index = projects.indexOf(project);
    projects.splice(index, 1);
}

let makeNewNote = (element) => {
    let title = element.children[0].value;
    let description = element.children[1].value;
    
    let new_note = createNote(title, description);
    notes.push(new_note);
    localStorage.setItem("notes", JSON.stringify(notes))
}

let getProjects = () => {
    return projects;
}

export { makeNewToDo, makeNewProject, deleteProject, getProjects, makeNewNote }