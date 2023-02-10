const express = require("express");
const path = require("path");
const router = express.Router();

//same routes can be used for different methods like get, post, put etc.

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  //__dirname points to routes folder, so we add "../"
});

//  /add-product => for POST request
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
