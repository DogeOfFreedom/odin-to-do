import { makeNewToDo, updateToDo } from "../storage/todoStorage.js";

let createToDoModal = (action, element, todo = null) => {
    if(action === "add") {
        let modalTitle = `
            <div class="title-container">
                <span>Add New To Do</span>
            </div>
        `
        let todo_obj = {
            title: "",
            description: "",
            dueDate: "",
            priority: "",
            id: ""
        }
        toDoModal(modalTitle, makeNewToDo, element, todo_obj);
    } 
    else if(action === "edit") {
        let modalTitle = `
            <div class="title-container">
                <span>Edit To Do</span>
            </div>
        `
        toDoModal(modalTitle, updateToDo, element, todo);
    }
}

let toDoModal = (modalTitle, modalAction, element, todo) => {
    let modal = document.querySelector("dialog");
    element.addEventListener("click", () => {
        modal.innerHTML = `
            <div class="dialog-container">
                ${modalTitle}
                <form class="todo-form" action="" value="${todo.id}">
                    <input name="title" type="text" id="title" maxlength="50" placeholder="New To Do..." required>
                    <textarea name="description" id="description" cols="10" rows="5" placeholder="Description...">${todo.description}</textarea>
                    <input type="date" id="date" required>
                    <div>  
                        <button id="low-priority-btn" type="button" data-selected="false">Low</button>
                        <button id="high-priority-btn" type="button" data-selected="false">High</button>
                    </div>
                    <button id="form-submit-btn" type="submit">Submit</button>
                </form>
            </div>
        `
        document.querySelector("#title").setAttribute("value", todo.title);
        document.querySelector("#date").setAttribute("value", todo.dueDate);

        modal.showModal();
        
        let low_priority_btn = document.querySelector("#low-priority-btn");
        let high_priority_btn = document.querySelector("#high-priority-btn");
        low_priority_btn.addEventListener("click", () => {
            let selected = low_priority_btn.getAttribute("data-selected");
            if(selected === "false") {
                low_priority_btn.style.color = "rgb(244, 248, 255)";
                low_priority_btn.style["background-color"] = "green";
                low_priority_btn.setAttribute("data-selected", "true");
                if(high_priority_btn.getAttribute("data-selected") === "true") {
                    high_priority_btn.click();
                }
            } else {
                low_priority_btn.style.color = "green";
                low_priority_btn.style["background-color"] = "rgb(244, 248, 255)";
                low_priority_btn.setAttribute("data-selected", "false");
            }
        })

        high_priority_btn.addEventListener("click", () => {
            let selected = high_priority_btn.getAttribute("data-selected");
            if(selected === "false") {
                high_priority_btn.style.color = "rgb(244, 248, 255)";
                high_priority_btn.style["background-color"] = "red";
                high_priority_btn.setAttribute("data-selected", "true");
                if(low_priority_btn.getAttribute("data-selected") === "true") {
                    low_priority_btn.click();
                }
            } else {
                high_priority_btn.style.color = "red";
                high_priority_btn.style["background-color"] = "rgb(244, 248, 255)";
                high_priority_btn.setAttribute("data-selected", "false");
            }
        })

        if(todo.priority !== "") {
            if(todo.priority === "high") {
                high_priority_btn.click();
            }
            else if(todo.priority === "low") {
                low_priority_btn.click();
            }
        }

        let todo_form = document.querySelector(".todo-form");
        todo_form.addEventListener("submit", e => {
            e.preventDefault();
            modal.close();
            modalAction(todo_form);
        });
    })
}

let new_todo_btn = document.querySelector(".add-todo-button");
createToDoModal("add", new_todo_btn);

export { createToDoModal }