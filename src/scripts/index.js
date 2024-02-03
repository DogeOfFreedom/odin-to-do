import "../style.css";
import { createProject, addToDo, deleteToDo } from "./project.js";
import { createToDo, changePriority } from "./todo.js";
import { addButtonLogic } from "../scripts/sidebar.js";

require("../scripts/hiddenButtonMenu.js")
require("../scripts/sidebar.js")



let model = document.querySelector("dialog");
model.showModal();

let model_btn = document.querySelector("dialog button");
model_btn.addEventListener("click", () => {
    model.close();
})

addButtonLogic();