import fs from "fs";
import chalk from "chalk";

function addNote(title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
  } else {
    console.log("Note title already taken");
  }

  saveNote(notes);
}

function removeNote(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNote(notesToKeep);
    return true;
  } else {
    return false;
  }
}

function readNote(title) {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse("Your note..."));
    console.log(title);
    console.log(note.body);
  }
}

function saveNote(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

function loadNotes() {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

function listNotes() {
  const notes = loadNotes();

  console.log(chalk.inverse("Your Notes"));

  notes.forEach((note) => console.log(note.title));
}

function getNotes() {
  return "Your Notes...";
}

export default { getNotes, addNote, removeNote, listNotes, readNote };
