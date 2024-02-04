import { getProjectNames } from "./storage";

let addButtonFunctionality = (element) => {
    let child = document.querySelector(`#${element.id} button`);
    
    // Adds "//" when sidebar options are hovered over
    element.addEventListener("mouseover", () => {
        if(child.getAttribute("selected") === "false") {
            child.textContent = "// " + child.textContent; 
        }
    })

    // Removes "//" when sidebar options are hovered off
    element.addEventListener("mouseout", () => {
        if(child.getAttribute("selected") === "false") {
            child.textContent = child.textContent.slice(3);
        }
    })

    element.addEventListener("click", () => {
        // Remove the selected symbol from all other options
        let sidebar_options = document.querySelectorAll(".sidebar-option");
        for(let opt of sidebar_options) {
            let opt_child = document.querySelector(`#${opt.id} button`);
            opt_child.setAttribute("selected", "false");
            opt_child.classList.remove("highlighted");
            if(opt_child.textContent[0] === "/") {
                opt_child.textContent = opt_child.textContent.slice(3);
            }
        }
        child.setAttribute("selected", "true");
        child.textContent = "// " + child.textContent; 
        child.classList.add("highlighted");
    })
}

let modifyName = (projects, name) => {
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].id === `${name}-btn`) {
            console.log(projects);
            let projs = projects.slice(i);
            return modifyName(projs, name + "-0");
        }
    }
    return name;
}

// Populate project list
let populateProjectList = () => {
    let project_names = getProjectNames();
    let project_list = document.querySelector(".project-list");
    project_list.innerHTML = "";
    for(let project_name of project_names) {        
        let project_btn = document.createElement("button");
        project_btn.setAttribute("selected", "false");
        project_btn.setAttribute("type", "button");
        project_btn.textContent = project_name;
        // Cleanse project name
        project_name = isNaN(project_name[0]) === true ? project_name : "a" + project_name;
        project_name = project_name.replaceAll(/[^a-zA-Z0-9]/g, "");

        let new_list_item = document.createElement("li");
        new_list_item.classList.add("project-option", "sidebar-option");
        
        // Check if id already exists
        let existing_projects = Array.from(document.querySelectorAll(".project-option"));
        project_name = modifyName(existing_projects, project_name);

        new_list_item.id = project_name + "-btn";
        
        new_list_item.appendChild(project_btn);
        project_list.appendChild(new_list_item);
        
        addButtonFunctionality(new_list_item);
    }
}

export { populateProjectList };

let sidebar_options = document.querySelectorAll(".sidebar-option");
for(let option of sidebar_options) {
    addButtonFunctionality(option);
}

populateProjectList();

