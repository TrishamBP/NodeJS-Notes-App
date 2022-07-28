const fs = require("fs");
const chalk = import("chalk");

// Adding a new note
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
  } else {
    console.log("Note title taken");
  }

  savedNotes(notes);
};
// Removing notes
const removeNotes = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  savedNotes(notesToKeep);
};

const savedNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//Loading the notes.
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json", {
      encoding: "utf8",
      flag: "r",
    });
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Listing Notes
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};

//Read Notes
const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => {
    note.title === title;
  });

  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log("Note not found");
  }
};

module.exports = {
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
