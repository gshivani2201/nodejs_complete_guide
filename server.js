// 3rd party package
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const usersData = require("./routes/users");
const indexRoutes = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersData.routes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render("page-not-found", { pageTitle: "Page Not Found", layout: false });
});

app.listen(3000);
