const fs = require("fs");

function readFile() {
  let fileData = null; // btw if left, then it is undefined and JSON.parse(undefined) throws SyntaxError
  try {
    fileData = fs.readFileSync("data.json");
    // let fileData = fs.readFileSync("data.json"); // variable shadowing
    console.log(fileData);
  } catch (error) {
    console.log("Error ocurred:");
    console.log(error.message);
  }
  console.log("Hi there");
  console.log("JSON from fileData:");
  console.log(JSON.parse(fileData));
}

readFile();
