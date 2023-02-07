// 3rd party package
const express = require("express");

const app = express();

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware");
  res.send("<h1>Add product page</h1>");
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);