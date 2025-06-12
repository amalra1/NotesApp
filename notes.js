import fs from "fs";

function addNote(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (!duplicateNotes.length) {
    notes.push({
      title: title,
      body: body,
    });
  } else {
    console.log("Note title already taken");
  }

  saveNote(notes);
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

function getNotes() {
  return "Your Notes...";
}

export default { getNotes, addNote };
