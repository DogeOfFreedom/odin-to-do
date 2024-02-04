import { getById, modifyName } from "./storageHelper";
import { createNote } from "../objects/note";

let notes = [];

if(localStorage.getItem("notes") !== null) {
    notes = JSON.parse(localStorage.getItem("notes"));
}

let makeNewNote = element => {
    let { id, title, description } = extractFromNoteForm(element);
    
    let new_note = createNote(id, title, description);
    notes.push(new_note);
    localStorage.setItem("notes", JSON.stringify(notes))
}

let extractFromNoteForm = element => {
    let title = String(element.children[0].value);
    title = title.trim();
    let id = modifyName(notes, title);

    let description = element.children[1].value;

    return { id, title, description }
}

let updateNote = element => {
    let { title, description } = extractFromNoteForm(element);
    let id = element.id;
    let note = getById(notes, id);
    note.title = title;
    note.description = description;
}

let deleteNote = note => {
    let index = notes.indexOf(note);
    notes.splice(index, 1);
}

export { makeNewNote, deleteNote, updateNote }