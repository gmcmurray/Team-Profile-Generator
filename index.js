const askquestions = require("./utils/inquirer");
const FileIO = require("./utils/fileIO");
const makehtml = require("./utils/makehtml");
const fileIO = new FileIO();

// Function call to initialize app
// askquestions();
makehtml();
fileIO.write("message.txt", "Hello mudder lover!");