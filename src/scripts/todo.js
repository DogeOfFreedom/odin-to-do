let createToDo = (title, description, dueDate, priority) => {
    let valid_priorities = ["low", "high"];
    let new_to_do = {
        title, description, dueDate, priority,
        set toDoPriority(value) {
            if(valid_priorities.includes(value)) {
                this.priority = value;
            }
            else {
                console.log("INVALID PRIORITY VALUE");
            }
        }
    }
    return new_to_do;
}

export { createToDo };