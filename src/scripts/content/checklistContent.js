import { home_project } from "../storage/projectStorage";
import { createToDoEntries } from "./contentHelper";

let populateHome = () => {
    let todos = home_project.todos;
    createToDoEntries(todos);
}

let populateToday = () => {
    let due_todos = filterToDos((a,b) => (a <= b));
    createToDoEntries(due_todos);
}

let populateLater = () => {
    let due_todos = filterToDos((a,b) => (a > b));
    createToDoEntries(due_todos);
}

let filterToDos = filter => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // .getMonth() is 0-indexed
    let day = date.getDate();
    let today = Date.parse(`${year}-${month}-${day}`);
    let todos = home_project.todos;
    let due_todos = [];
    for(let todo of todos) {
        let due_date = Date.parse(todo.dueDate);
        if(filter(due_date, today)) {
            due_todos.push(todo);
        }
    }
    return due_todos;
}

export { populateHome, populateToday, populateLater }