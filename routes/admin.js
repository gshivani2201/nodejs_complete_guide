const express = require("express");
const path = require("path");

const adminController = require("../controllers/admin");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

//GET
router.get("/add-product", isAuth, adminController.getAddProduct);
router.get("/products", isAuth, adminController.getProducts);

router.get("/edit-product/:productId", isAuth, adminController.editProduct);

// //POST
router.post("/edit-product", isAuth, adminController.postEditProduct);
router.post("/add-product", isAuth, adminController.postAddProduct);
router.post("/delete-product", isAuth, adminController.postDeleteProduct);

exports.routes = router;
