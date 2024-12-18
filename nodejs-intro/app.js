const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded());

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name</label>' +
      '<input type="text" name="username" /><button>Ok!</button></form>'
  );
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ol>";
  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }
  responseData += "</ol>";

  // res.send(existingUsers);
  res.send(responseData);
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  console.log(userName);

  const filePath = path.join(__dirname, "data", "users.json");

  console.log(__dirname);
  console.log(filePath);

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  existingUsers.push(userName);
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send(`<h1>Username ${userName} saved into database.</h1>`);
});

app.listen(3000);
