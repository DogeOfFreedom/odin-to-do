import "../style.css"
import { createProject, addToDo, deleteToDo } from "./project.js";
import { createToDo, changePriority } from "./todo.js";

let printOut = todos => {
    for(let todo of todos) {
        console.log(todo);
    }
}

let title = "Task 1";
let description = "Lorem Ipsum is my babe";
let dueDate = "pog pog pog";
let priority = "high";

let project1 = createProject("myProject");
let todo1 = createToDo(title, description, dueDate, priority);
let todo2 = createToDo("bitch", description, dueDate, priority);
let todo3 = createToDo("bitchesg", description, dueDate, priority);
addToDo(project1, todo1);
addToDo(project1, todo2);
addToDo(project1, todo3);
printOut(project1.todos);
deleteToDo(project1, todo2);
console.log("new");
printOut(project1.todos);

