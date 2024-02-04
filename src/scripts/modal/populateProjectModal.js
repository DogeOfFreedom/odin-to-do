import { makeNewProject } from "../storage/projectStorage.js";

let modal = document.querySelector("dialog");
let new_project_btn = document.querySelector(".add-project-button");
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
        e.preventDefault();
        modal.close();
        let new_project_form = document.querySelector(".project-form");
        makeNewProject(new_project_form);
    });
})