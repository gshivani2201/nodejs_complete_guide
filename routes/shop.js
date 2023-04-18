const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  //__dirname points to routes folder, so we add "../"
});

module.exports = router;
