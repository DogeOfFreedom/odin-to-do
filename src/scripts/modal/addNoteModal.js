import { populateNotes } from "../content/noteContent.js";
import { getCurrentlySelected } from "../sidebar.js";
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
                <input name="title" type="text" id="title" maxlength="25" placeholder="New Note..." required>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Description..." required></textarea>
                <button id="form-submit-btn" type="submit">Submit</button>
            </form>   
        </div> 
    `
    modal.showModal();

    let note_form = document.querySelector(".note-form");
    note_form.addEventListener("submit", e => {
        e.preventDefault();
        modal.close();
        makeNewNote(note_form);

        let selected = getCurrentlySelected();
        if(selected === "notes") {
            populateNotes(selected);
        }
    });
})