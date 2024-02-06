import { initiate } from "../sidebar";
import { getProjectById, home_project, updateProjectTodos, deleteToDo, deleteProject } from "../storage/projectStorage";
import { showEmpty } from "./emptyContent";
let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let populate = project => {
    switch(project) {
        case "home":
            populateHome();
            break;
        case "today":
            populateToday();
            break;
        case "later":
            populateLater();
            break;
        default:
            populateProject(project);
    }
}

let populateHome = () => {
    let todos = home_project.todos;
    createToDos("home", todos);
}

let populateToday = () => {
    let due_todos = filterToDos((a,b) => (a <= b));
    createToDos("home", due_todos);
}

let populateLater = () => {
    let due_todos = filterToDos((a,b) => (a > b));
    createToDos("home", due_todos);
}

let populateProject = id => {
    let targetProject = getProjectById(id);
    let todos = targetProject.todos;
    createToDos(id, todos);
}

let createToDos = (projectId, todos) => {
    if(todos.length > 0) {
        createToDoEntries(todos);
    } else {
        showEmpty();
        if(projectId !== "home") {
            createProjectDeleteButton(projectId);
        }
    }
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

let createToDoEntries = (todos) => {
    let body_content = document.querySelector(".body-content");
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
                updateProjectTodos(todo.projectId, todo)
            } else {
                unchecked_box(box, title, due_date);
                todo.completed = false;
                updateProjectTodos(todo.projectId, todo)
            }
        })
        checkbox.appendChild(box);
        row.appendChild(checkbox);

        let title = document.createElement("p");
        title.id = "todo-title";
        title.classList.add("todo-row-element", "todo-title-hover");
        title.textContent = todo.title;
        title.addEventListener("click", () => {
            // func
        })
        row.appendChild(title);

        let due_date = document.createElement("p");
        due_date.id = "todo-date";
        due_date.className = "todo-row-element";
        let dueDate = todo.dueDate;
        if(dueDate !== "") {
            let todo_due_date = dueDate.split("-");
            let year = todo_due_date[0];
            let month = months[Number(todo_due_date[1]) - 1];
            let day = todo_due_date[2];
            due_date.textContent = `${month} ${day} ${year}`;
        } else {
            due_date.textContent = "No Due Date";
        }        
        row.appendChild(due_date);

        if(todo.completed === true) {
            checked_box(box, title, due_date);
        }
        
        let btn_highlight = "rgb(25, 146, 238)";
        let edit_btn = document.createElement("button");
        edit_btn.id = "todo-edit-btn";
        edit_btn.className = "todo-row-element";
        edit_btn.innerHTML = "&#x270E;"; // Pencil icon
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
        delete_btn.innerHTML = "&#x292B;"; // Cross icon
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
            deleteToDo(todo.projectId, todos);
            createToDos(todo.projectId, todos);
        })

        row.appendChild(delete_btn);
        body_content.appendChild(row);
    }
}

let createProjectDeleteButton = (projectId) => {
    let content = document.querySelector(".body-content");
    let delete_btn_container = document.createElement("div");
    delete_btn_container.className = "delete-btn-container";
    let delete_btn = document.createElement("button");
    delete_btn.setAttribute("type", "button");
    delete_btn.classList.add("project-delete-btn", "big-btn");
    let span = document.createElement("span");
    span.innerHTML = "&#x292B";
    delete_btn.appendChild(span);
    delete_btn.addEventListener("click", () => {
        deleteProject(projectId);
        initiate();
    })
    delete_btn_container.appendChild(delete_btn);
    content.appendChild(delete_btn_container);
}

let checked_box = (box, title, dueDate)  => {
    let highlight_colour = "rgb(174, 174, 174)";
    box.setAttribute("checked", "true");
    box.innerHTML = "&#x2611;" // Checked Box
    box.style.color = highlight_colour;
    console.log(box);
    console.log(title);
    console.log(dueDate);
    
    title.classList.add("strike-out");
    title.classList.remove("todo-title-hover");
    dueDate.classList.add("strike-out");
}

let unchecked_box = (box, title, dueDate) => {
    box.setAttribute("checked", "false");
    box.innerHTML = "&#x2610" // Unchecked Box
    box.style.color = "black";
    title.classList.remove("strike-out");
    title.classList.add("todo-title-hover");
    dueDate.classList.remove("strike-out");
}

export { populate }