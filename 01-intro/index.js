const express = require("express");

const app = express();

app.get("/", (req, res) => {
 // res.json("some of the text");
  res.end();
});
app.get("/home", (req, res) => {
  res.send("Welcome to our home page");
});
app.get("/login", (req, res) => {
  res.send("Welcome to our loging page");
});
app.post("/process-login", (req, res) => {
  res.send("We are processing the login data here ...");
});

app.listen(3000, () => console.log(" The server has started"));
