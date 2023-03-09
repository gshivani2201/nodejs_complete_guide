// 3rd party package
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const errorController = require("./controllers/error");
const sequelize = require("./utils/database");
const Product = require('./models/product');
const User = require('./models/user')

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

sequelize
  .sync({ force: true })
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
