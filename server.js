// 3rd party package
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<html><body><form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form></body></html>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
