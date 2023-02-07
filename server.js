// 3rd party package
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("In another middleware");
  //...send a response here if not calling another middleware through next();
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);