import { saveHomeProject, saveProjects } from "../storage/projectStorage";
let body_content = document.querySelector(".body-content");
let createToDoEntries = (todos) => {
    body_content.innerHTML = ""; // Clear Content
    for(let todo of todos) {
        let row = document.createElement("div");
        row.className = "todo-row";
        row.setAttribute("value", todo.id);
        
        let priority_indicator = document.createElement("div");
        priority_indicator.id = "priority-indicator";
        let colour = todo.priority === "none" ? "gray" : todo.priority === "low" ? "green" : "red";
        priority_indicator.style["background-color"] = colour;
        row.appendChild(priority_indicator);

        let checkbox = document.createElement("p");
        checkbox.id = "todo-checkbox";
        checkbox.className = "todo-row-element";
        let box = document.createElement("span");
        box.innerHTML = "&#x2610" // Unchecked Box
        box.setAttribute("checked", "false");
        box.addEventListener("click", () => {
            let checked = box.getAttribute("checked");
            let title = document.querySelector(`.todo-row[value="${todo.id}"] #todo-title`);
            let due_date = document.querySelector(`.todo-row[value="${todo.id}"] #todo-date`);
            if(checked === "false") {
                checked_box(box, title, due_date);
                todo.completed = true;
                saveChanges(todo.projectId);
            } else {
                unchecked_box(box, title, due_date);
                todo.completed = false;
                saveChanges(todo.projectId)
            }
        })
        checkbox.appendChild(box);
        row.appendChild(checkbox);

        let title = document.createElement("p");
        title.id = "todo-title";
        title.className = "todo-row-element";
        title.textContent = todo.title;
        row.appendChild(title);

        let dueDate = document.createElement("p");
        dueDate.id = "todo-date";
        dueDate.className = "todo-row-element";
        dueDate.textContent = todo.dueDate;
        row.appendChild(dueDate);

        if(todo.completed === true) {
            checked_box(box, title, dueDate);
        }
        
        let btn_highlight = "rgb(25, 146, 238)";
        let edit_btn = document.createElement("button");
        edit_btn.id = "todo-edit-btn";
        edit_btn.className = "todo-row-element";
        edit_btn.innerHTML = "&#x270E;";
        edit_btn.addEventListener("mouseover", () => {
            edit_btn.style.color = btn_highlight;
            edit_btn.style["font-weight"] = "bold";
        })
        edit_btn.addEventListener("mouseout", () => {
            edit_btn.style.color = "black";
            edit_btn.style["font-weight"] = 100;
        })
        row.appendChild(edit_btn);

        let delete_btn = document.createElement("button");
        delete_btn.id = "todo-delete-btn";
        delete_btn.className = "todo-row-element";
        delete_btn.innerHTML = "&#x292B;";
        delete_btn.addEventListener("mouseover", () => {
            delete_btn.style.color = "red";
            delete_btn.style["font-weight"] = "bold";
        })
        delete_btn.addEventListener("mouseout", () => {
            delete_btn.style.color = "black";
            delete_btn.style["font-weight"] = 100;
        })
        delete_btn.addEventListener("click", () => {
            let index = todos.indexOf(todo);
            todos.splice(index, 1);
            createToDoEntries(todos);
            saveChanges(todo.projectId);
        })

        row.appendChild(delete_btn);
        body_content.appendChild(row);
    }
}

let saveChanges = (targetProject) => {
    if(targetProject === "home") {
        saveHomeProject();
    } else {
        saveProjects();
    }
}

let checked_box = (box, title, dueDate)  => {
    let highlight_colour = "rgb(174, 174, 174)";
    box.setAttribute("checked", "true");
    box.innerHTML = "&#x2611;" // Checked Box
    box.style.color = highlight_colour;
    title.style["text-decoration"] = "line-through";
    title.style.color = highlight_colour;
    dueDate.style["text-decoration"] = "line-through";
    dueDate.style.color = highlight_colour
}

let unchecked_box = (box, title, dueDate) => {
    box.setAttribute("checked", "false");
    box.innerHTML = "&#x2610" // Unchecked Box
    box.style.color = "black";
    title.style["text-decoration"] = "none";
    title.style.color = "black";
    dueDate.style["text-decoration"] = "none";
    dueDate.style.color = "black";
}

export { createToDoEntries }