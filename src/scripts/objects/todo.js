let createToDo = (title, description, dueDate, priority) => {
    let completed = false;
    return { title, description, dueDate, priority, completed };
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