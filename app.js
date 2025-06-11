import getNotes from "./notes.js";
import chalk from "chalk";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Adds a new note",
    handler: function () {
      console.log("Adding a new note");
    },
  })
  .command({
    command: "remove",
    describe: "Removes a note",
    builder: {
      title: {
        describe: "Title of the note to be removed",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      console.log(`Removing the note titled: ${argv.title}`);
    },
  }).argv;

const msg = getNotes();
console.log(chalk.green(msg));
