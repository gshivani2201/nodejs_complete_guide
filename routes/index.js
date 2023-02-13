const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");
const usersData = require("./users");

const router = express.Router();

router.get("/", (req, res, next) => {
  const users = usersData.users;
  res.render("index", {
    users: users,
    pageTitle: "Index",
    path: "/",
  });
});

module.exports = router;
