const fs = require("fs");
const fsp = require("fs/promises");

function readFile() {
  let fileData;

  // fileData = fs.readFile("data.txt");
  // -> TypeError [ERR_INVALID_ARG_TYPE]: The "cb" argument must be of type function. Received undefined

  /// fs async way
  fs.readFile("data.txt", function (error, fileData) {
    if (error) {
      console.log("Error parsing the file");
    } else {
      console.log("File parsing done!");
      console.log(fileData.toString() + "\n\n");
    }
  });

  /// promises way
  fsp
    .readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing done using Promises!");
      console.log(fileData.toString());
      return fileData.toString();
    })
    .catch(function (error) {
      console.log("Error parsing the file - error handler from inside Promise");
    })
    .then(function (nextVal) {
      console.log("\n******\nNext function in so called promise chain");
      if (nextVal) console.log(nextVal.toUpperCase());
      else console.log("Nothing to see there.");
    });

  console.log("Hello there!");
}

async function readFileSecondVersion() {
  let fileData;
  try {
    fileData = await fsp.readFile("data.txt");
  } catch (error) {
    console.log("Error catched in async/await");
    console.log(error);
  }

  console.log("File parsing done! async/await version");
  console.log(fileData && fileData.toString()); // trick - use fileData && to mitigate error

  console.log("Hi there");
}

readFile();
readFileSecondVersion();
