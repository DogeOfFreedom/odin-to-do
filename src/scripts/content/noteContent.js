import { deleteNote, notes } from "../storage/noteStorage"
import { showEmpty } from "./emptyContent"

let populateNotes = () => {
    if(notes.length == 0) {
        showEmpty();
    }
    else {
        addNoteContents();
    }
}

let addNoteContents = () => {
    let body_content = document.querySelector(".body-content");
    body_content.innerHTML = "";
    let note_container = document.createElement("div");
    note_container.className = "note-container";
    for(let note of notes) {
        let card = document.createElement("div");
        card.className = "note-card";
        card.setAttribute("value", note.id);
        
        let title = document.createElement("p");
        title.className = "note-title";
        title.textContent = note.title;
        
        let description = document.createElement("p");
        description.className = "note-description";
        description.textContent = note.description;

        let delete_btn = document.createElement("button");
        delete_btn.setAttribute("type", "button");
        delete_btn.className = "note-delete-btn";
        delete_btn.innerHTML = "&#x292B";
        delete_btn.addEventListener("click", () => {
            deleteNote(note);
            populateNotes();
        })
        
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(delete_btn);
        note_container.appendChild(card);
    }
    body_content.appendChild(note_container);
}

export { populateNotes }