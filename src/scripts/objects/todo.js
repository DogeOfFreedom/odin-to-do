let createToDo = (id, title, description, dueDate, priority, projectId) => {
    let completed = false;
    return { id, title, description, dueDate, priority, projectId, completed };
}

let changePriority = (todo, value) => {
    let valid_priorities = ["none", "low", "high"];
    if(valid_priorities.includes(value)) {
        todo.priority = value;
    }
    else {
        console.log("INVALID PRIORITY VALUE");
    }
}

export { createToDo, changePriority };