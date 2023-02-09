const express = require("express");
const router = express.Router();
//same routes can be used for different methods like get, post, put etc.

//  /add-product => for GET request
router.get("/add-product", (req, res, next) => {
  res.send(
    "<html><body><form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form></body></html>"
  );
});

//  /add-product => for POST request
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
