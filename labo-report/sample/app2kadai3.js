const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  const message = "Hello world";
  res.render('show', {mes:message});
});

app.get("/bye", (req, res) => {
  const message = "さようなら";
  res.render('show', {mes:message});
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
