let createViewToDoModal = todo => {
    let dialog = document.querySelector("dialog");  
    dialog.innerHTML = `
        <div class="view-todo-container"> 
            <p>${todo.title}</p>
            <p>${todo.description}</p>
            <div>
                <button class="note-delete-btn">
                    <span>&#x292B</span>
                </button>
            </div>
        </div> 
    `
    dialog.showModal();
    let close = document.querySelector(".view-todo-container button");
    close.addEventListener("click", () => {
        dialog.close();
    })
}

export { createViewToDoModal }