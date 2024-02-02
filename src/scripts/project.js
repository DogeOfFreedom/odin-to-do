import { createToDo } from "../scripts/todo.js"

let createProject = (title) => {
    let todos = [];
    
    return { title, todos };
}

let addToDo = (project, todo) => {
    project.todos.push(todo);
}

export { createProject, addToDo }