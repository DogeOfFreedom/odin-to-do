import { getById, modifyName } from "./storageHelper";
import { projects, home_project, getToDoFromProject } from "./projectStorage";
import { createToDo } from "../objects/todo";
import { addToDo } from "../objects/project";
import { getCurrentlySelected } from "../sidebar";
import { populate } from "../content/projectContent";

let makeNewToDo = element => {
    let { id, title, description, dueDate, priority, targetProject } = extractFromToDoForm(element);
    targetProject = targetProject === "" ? "home" : targetProject;
    let new_to_do = createToDo(id, title, description, dueDate, priority, targetProject.id);

    addToDo(targetProject, new_to_do);
    if(targetProject.id === "home") {
        localStorage.setItem("home", JSON.stringify(home_project));
    } else {
        localStorage.setItem("projects", JSON.stringify(projects));
    }

    // Refresh contents
    let selected = getCurrentlySelected();
    populate(selected);
}

let extractFromToDoForm = (element) => {
    let title = String(element.children[0].value);
    title = title.trim();
    
    let description = element.children[1].value;
    let dueDate = element.children[2].value;
    
    let priority_div = element.children[3];
    let low_priority_btn = priority_div.children[0];
    let high_priority_btn = priority_div.children[1];
    let priority = "";

    if(low_priority_btn.getAttribute("data-selected") === "true") {
        priority = "low";
    } 
    else if(high_priority_btn.getAttribute("data-selected") === "true") {
        priority = "high";
    }
    else {
        priority = "none";
    }

    // choose which project to add todo to depending on which option in the sidebar is selected
    let targetProject = chooseProject();

    let id = modifyName(targetProject.todos, title);
    return { id, title, description, dueDate, priority, targetProject }
}

let updateToDo = (element) => {
    let { title, description, dueDate, priority, targetProject } = extractFromToDoForm(element);
    let id = document.querySelector("form").getAttribute("value");
    let todo = getToDoFromProject(targetProject, id);
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;

    // Refresh contents
    let selected = getCurrentlySelected();
    populate(selected);
}

let removeToDo = (projectId, todoId) => {
    let project = getById(projects, project_id);
    let todo = getToDo(projectId, todoId);
    deleteToDo(project, todo);
}



// Determines which project is selected on the sidebar, which the todo will be added to
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

export { makeNewToDo, updateToDo, removeToDo }