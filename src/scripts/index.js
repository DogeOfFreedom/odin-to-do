import "../style.css"
import { createProject, addToDo, deleteToDo } from "./project.js";
import { createToDo, changePriority } from "./todo.js";
import { populateProjectsList } from "./sidebar.js";

// Adds hiding and unhiding buttons for hidden button menu
let add_btn = document.querySelector(".add-button");
let new_todo_btn = document.querySelector(".add-todo-button");
let new_project_btn = document.querySelector(".add-project-button");
let new_note_btn = document.querySelector(".add-note-button");
add_btn.addEventListener("click", () => {
    new_todo_btn.classList.toggle("hide");
    new_project_btn.classList.toggle("hide");
    new_note_btn.classList.toggle("hide");
})

// Adds "//" when sidebar options are hovered over
let sidebar_options = document.querySelectorAll(".button-option");
for(let option of sidebar_options) {
    let child = document.querySelector(`#${option.id} button`);
    option.addEventListener("mouseover", () => {
        child.textContent = "// " + child.textContent; 
    })
    option.addEventListener("mouseout", () => {
        child.textContent = child.textContent.slice(3);
    })
}

populateProjectsList();