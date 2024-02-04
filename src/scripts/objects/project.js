let createProject = (title) => {
    let todos = [];
    return { title, todos };
}

let addToDo = (project, todo) => {
    project.todos.push(todo);
}

let deleteToDo = (project, todo) => {
    let index = project.todos.indexOf(todo);
    if(index > -1) { // found todo
        project.todos.splice(index, 1);
    }
}

let printOutToDos = (project) => {
    for(let todo of project.todos) {
        console.log(todo);
    }
}

export { createProject, addToDo, deleteToDo, printOutToDos }