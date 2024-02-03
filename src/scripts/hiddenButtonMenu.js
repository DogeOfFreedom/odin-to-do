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

/* 
To Do
- Title
- Description
- Due Date
- Priority

Project
- Title

Note
- Title
- Description

*/


let modal = document.querySelector("dialog");

new_todo_btn.addEventListener("click", () => {

})

new_project_btn.addEventListener("click", () => {

})

new_note_btn.addEventListener("click", () => {

})

