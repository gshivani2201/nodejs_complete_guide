// 3rd party package
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");
// const User = require("./models/user");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("6434d4ae1060dedbc81506eb")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://node-shivani:iJX1XgSGr6nprkn4@cluster0.fc5jdgf.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
