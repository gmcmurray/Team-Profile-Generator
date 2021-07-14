const askquestions = require("./utils/questions");
const askmenu = require("./utils/questions");
const FileIO = require("./utils/fileIO");
const makehtml = require("./utils/makehtml");
const askmanager = require("./utils/questions");
const fileIO = new FileIO();

// Function call to initialize app
askmanager();
// askmenu();
// askquestions();
// makehtml();
fileIO.write("message.txt", "Hello mudder lover!");