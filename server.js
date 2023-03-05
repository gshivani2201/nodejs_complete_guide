// 3rd party package
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const errorController = require("./controllers/error");
const db = require("./utils/database");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

db.execute("SELECT * FROM products")
  .then((result) => console.log(result[0], result[1]))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
