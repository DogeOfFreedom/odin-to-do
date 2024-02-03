import "../style.css"
import { createProject, addToDo, deleteToDo } from "./project.js";
import { createToDo, changePriority } from "./todo.js";
import { populateProjectsList } from "./sidebar.js";

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
let home_btn = document.querySelector("#home-btn");
let today_btn = document.querySelector("#today-btn");
let later_btn = document.querySelector("#later-btn");
let notes_btn = document.querySelector("#notes-btn");

for(let btn of [home_btn, today_btn, later_btn, notes_btn]) {
    btn.addEventListener("mouseover", () => {
        btn.textContent = "// " + btn.textContent; 
    })
    btn.addEventListener("mouseout", () => {
        btn.textContent = btn.textContent.slice(3);
    })
}

populateProjectsList();