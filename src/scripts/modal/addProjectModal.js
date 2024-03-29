import { makeNewProject } from "../storage/projectStorage.js";
import { populateProjectList } from "../sidebar.js";

let modal = document.querySelector("dialog");
let new_project_btn = document.querySelector(".add-project-button");
new_project_btn.addEventListener("click", () => {
    modal.innerHTML = `
        <div class="dialog-container">  
            <div class="title-container">
                <span>Add New Project</span>
            </div>
            <form class="project-form" action="">
                <input name="title" type="text" id="title" maxlength="20" placeholder="New Project..." required>
                <button id="form-submit-btn" type="submit">Submit</button>
            </form> 
        </div>     
    `
    modal.showModal();
    
    let project_form = document.querySelector(".project-form");  
    project_form.addEventListener("submit", e => {
        e.preventDefault();
        modal.close();
        makeNewProject(project_form);
        populateProjectList();
    });
})