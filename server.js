const express = require("express");

const app = express();

// app.use((req, res, next) => {
//     console.log("middleware 1")
//     next();
// })

// app.use((req, res, next) => {
//     console.log("middleware 2")
//     res.send("<h1>Hello World</h1>")
// })

app.use("/users", (req, res, next) => {
  console.log("middleware 1");
  res.send("<ul><li>user 1</li><li>user 2</li></ul>");
});

app.use("/", (req, res, next) => {
  console.log("middleware 2");
  res.send("<h1>Hello World</h1>");
});

app.listen(5000);