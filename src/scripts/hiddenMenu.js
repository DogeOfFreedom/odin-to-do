// Adds hiding and unhiding buttons for hidden button menu
let add_btn = document.querySelector(".add-btn");
let new_todo_btn = document.querySelector(".add-todo-button");
let new_project_btn = document.querySelector(".add-project-button");
let new_note_btn = document.querySelector(".add-note-button");

add_btn.addEventListener("click", () => {
    new_todo_btn.classList.toggle("hide");
    new_project_btn.classList.toggle("hide");
    new_note_btn.classList.toggle("hide");
})