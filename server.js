// 3rd party package
const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");

const app = express();

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
