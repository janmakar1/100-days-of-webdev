const path = require("path");

const express = require("express");

const app = express();

const htmlDirectoryPath = path.join(__dirname, "views");

app.get("/about", function (req, res) {
  const htmlFilePath = path.join(htmlDirectoryPath, "about.html");
  res.sendFile(htmlFilePath);
});

app.get("/confirm", function (req, res) {
  const htmlFilePath = path.join(htmlDirectoryPath, "confirm.html");
  res.sendFile(htmlFilePath);
});

app.get("/", function (req, res) {
  const htmlFilePath = path.join(htmlDirectoryPath, "index.html");
  res.sendFile(htmlFilePath);
});

app.get("/recommend", function (req, res) {
  const htmlFilePath = path.join(htmlDirectoryPath, "recommend.html");
  res.sendFile(htmlFilePath);
});

app.get("/restaurants", function (req, res) {
  const htmlFilePath = path.join(htmlDirectoryPath, "restaurants.html");
  res.sendFile(htmlFilePath);
});

app.listen(3000);
