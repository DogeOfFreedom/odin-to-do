let new_todo_btn = document.querySelector(".add-todo-button");
let new_project_btn = document.querySelector(".add-project-button");
let new_note_btn = document.querySelector(".add-note-button");
let modal = document.querySelector("dialog");
new_todo_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container">
            <div class="title-container">
            <span>Add New To Do</span>
            </div>
            <form class="todo-form" action="">
                <input name="title" type="text" id="title" placeholder="New To Do..." required>
                <textarea name="description" id="description" cols="10" rows="5" placeholder="Description..."></textarea>
                <input type="date" id="date" required>
                <div>  
                    <button id="low-priority-btn" type="button" data-selected="false">Low</button>
                    <button id="high-priority-btn" type="button" data-selected="false">High</button>
                </div>
                <button id="form-submit-btn" type="button">Submit</button>
            </form>
        </div>
    `
    modal.showModal();
    let submit_btn = document.querySelector("#form-submit-btn");
    submit_btn.addEventListener("click", e => {
        e.preventDefault();
        modal.close();
    });
    
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
})

new_project_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container">  
            <div class="title-container">
                <span>Add New Project</span>
            </div>
            <form class="project-form" action="">
                <input name="title" type="text" id="title" placeholder="New Project..." required>
                <button id="form-submit-btn" type="button">Submit</button>
            </form> 
        </div>     
    `
    modal.showModal();
    let submit_btn = document.querySelector("#form-submit-btn");
    submit_btn.addEventListener("click", e => {
        modal.close();
    });
})

new_note_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container"> 
            <div class="title-container">
                <span>Add New Note</span>
            </div>
            <form class="note-form" action="">
                <input name="title" type="text" id="title" placeholder="New Note..." required>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Description..."></textarea>
                <button id="form-submit-btn" type="button">Submit</button>
            </form>   
        </div> 
    `
    modal.showModal();
    let submit_btn = document.querySelector("#form-submit-btn");
    submit_btn.addEventListener("click", e => {
        e.preventDefault();
        modal.close();
    });
})