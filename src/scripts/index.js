import "../style.css"
import { createProject, addToDo } from "./project.js";
import { createToDo } from "./todo.js";

let title = "Task 1";
let description = "Lorem Ipsum is my babe";
let dueDate = "pog pog pog";
let priority = "high";

let project1 = createProject("myProject");
let todo1 = createToDo(title, description, dueDate, priority);
addToDo(project1, todo1);
console.log(project1);
