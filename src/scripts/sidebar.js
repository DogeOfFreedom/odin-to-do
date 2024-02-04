import { getProjects } from "./storage";

let addButtonFunctionality = (element) => {
    let raw_value = element.getAttribute("value");
    let value = typeof raw_value === "number" ? String(raw_value) : raw_value;
    let child = document.querySelector(`.sidebar-option[value="${value}"] button`);
    
    // Adds "//" when sidebar options are hovered over
    element.addEventListener("mouseover", () => {
        if(element.getAttribute("selected") === "false") {
            child.textContent = "// " + child.textContent; 
        }
    })

    // Removes "//" when sidebar options are hovered off
    element.addEventListener("mouseout", () => {
        if(element.getAttribute("selected") === "false") {
            child.textContent = child.textContent.slice(3);
        }
    })

    element.addEventListener("click", () => {
        // Remove the selected symbol from all other options
        let sidebar_options = document.querySelectorAll(".sidebar-option");
        for(let opt of sidebar_options) {
            opt.setAttribute("selected", "false");
            let val = opt.getAttribute("value");
            let opt_child = document.querySelector(`.sidebar-option[value="${val}"] button`);
            opt_child.classList.remove("highlighted");
            if(opt_child.textContent[0] === "/") {
                opt_child.textContent = opt_child.textContent.slice(3);
            }
        }
        element.setAttribute("selected", "true");
        child.classList.add("highlighted");
        child.textContent = "// " + child.textContent; 
        
    })
}

// Checks if a name already exists with an array of objects
// If yes, appends "-0"
let modifyName = (arr, name) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].title === name) {
            let projs = projects.slice(i);
            return modifyName(projs, name + "-0");
        }
    }
    return name;
}

// Populate project list
let populateProjectList = () => {
    let projects = getProjects();
    let project_list = document.querySelector(".project-list");
    project_list.innerHTML = "";
    for(let project of projects) {     
        let project_btn = document.createElement("button");
        project_btn.setAttribute("type", "button");
        project_btn.textContent = project.title;

        let new_list_item = document.createElement("li");
        new_list_item.classList.add("sidebar-option", "project-option");
        new_list_item.setAttribute("value", project.title) ;
        new_list_item.setAttribute("selected", "false");
              
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

