const express = require("express");
const path = require("path");

const adminController = require("../controllers/admin");

const router = express.Router();

//GET
router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProducts);

//POST
router.post("/add-product", adminController.postAddProduct);

exports.routes = router;
