const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const notes = require("./notes");

// Create add command.
yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Adding command",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note Body",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      notes.addNote(argv.title, argv.body);
    },
  })
  .parse();

// Create remove command
yargs(hideBin(process.argv))
  .command({
    command: "remove",
    describe: "Removing the notes",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      notes.removeNotes(argv.title);
    },
  })
  .parse();

// Create the list command
yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "listing the notes",
    handler: function () {
      notes.listNotes();
    },
  })
  .parse();

// Create the read command
yargs(hideBin(process.argv))
  .command({
    command: "read",
    describe: "reading the notes",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      notes.readNotes(argv.title);
    },
  })
  .parse();
