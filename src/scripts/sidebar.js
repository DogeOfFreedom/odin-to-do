import { populate } from "./content/projectContent";
import { populateNotes } from "./content/noteContent";
import { projects } from "./storage/projectStorage";

let addEventListenersForStyling = (element) => {
    let value = element.getAttribute("value");
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

// Populate project list
let populateProjectList = () => {
    let project_list = document.querySelector(".project-list");
    project_list.innerHTML = "";
    for(let project of projects) {     
        let project_btn = document.createElement("button");
        project_btn.setAttribute("type", "button");
        project_btn.textContent = project.title;

        let new_list_item = document.createElement("li");
        new_list_item.classList.add("sidebar-option", "project-option");
        new_list_item.setAttribute("value", project.id) ;
        new_list_item.setAttribute("selected", "false");
        new_list_item.addEventListener("click", () => populate(new_list_item.getAttribute("value")));
              
        new_list_item.appendChild(project_btn);
        project_list.appendChild(new_list_item);
        
        addEventListenersForStyling(new_list_item);
    }
}

// Load content into main-content div when clicked
let addContentLoadFunction = () => {
    let home_option = document.querySelector(`.sidebar-option[value="home"]`);
    home_option.addEventListener("click", () => populate("home"));

    let today_option = document.querySelector(`.sidebar-option[value="today"]`);
    today_option.addEventListener("click", () => populate("today"));
    
    let later_option = document.querySelector(`.sidebar-option[value="later"]`);
    later_option.addEventListener("click", () => populate("later"));

    let notes_option = document.querySelector(`.sidebar-option[value="notes"]`);
    notes_option.addEventListener("click", populateNotes);
}



let getCurrentlySelected = () => {
    let options = document.querySelectorAll(".sidebar-option");
    for(let option of options) {
        if(option.getAttribute("selected") === "true") {
            return option.getAttribute("value");
        }
    }
}

let sidebar_options = document.querySelectorAll(".sidebar-option");
for(let option of sidebar_options) {
    addEventListenersForStyling(option);
}

let initiate = () => {
    populateProjectList();
    addContentLoadFunction();

    // Home automatically selected upon loading
    let home = document.querySelector(".sidebar-option[value='home']");
    home.click();
}

initiate();

export { populateProjectList, getCurrentlySelected, initiate };