const productController= require("../controllers/product");

const express = require("express");
const router = express.Router();
router.get("/product", productController.getProduct );
router.get("/", productController.getIndex);

module.exports = router;