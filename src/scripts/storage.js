import { createProject, addToDo, deleteToDo, printOutToDos } from "./objects/project";
import { createToDo, changePriority } from "./objects/todo";
import { createNote } from "./objects/note";
import { populateProjectList } from "./sidebar";

let notes = [];
let projects = [];
let home_project = createProject("home");


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
    addToDo(home_project, new_to_do);

    // choose which project to add todo to depending on which option in the sidebar is selected
    let targetProject = chooseProject();
    addToDo(targetProject, new_to_do);
}

let chooseProject = () => {
    let project_options = document.querySelectorAll(".project-option");
    for(let project of project_options) {
        if(project["selected"] === true) {
            return project; 
        }
    }
    return home_project;
}

let makeNewProject = (element) => {
    let title = element.children[0].value;
    let new_project = createProject(title);
    projects.push(new_project);
    populateProjectList();
}

let makeNewNote = (element) => {
    let title = element.children[0].value;
    let description = element.children[1].value;
    
    let new_note = createNote(title, description);
    notes.push(new_note);
}

let getProjectNames = () => {
    return projects.map(x => x.title);
}

export { makeNewToDo, makeNewProject, makeNewNote, getProjectNames }