import { makeNewNote } from "../storage/noteStorage.js";

let modal = document.querySelector("dialog");
let new_note_btn = document.querySelector(".add-note-button");
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
        let new_note_form = document.querySelector(".note-form");
        makeNewNote(new_note_form);
    });
})