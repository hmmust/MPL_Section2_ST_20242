const productController= require("../controllers/product");

const express = require("express");
const router = express.Router();
router.get("/product", productController.getProduct );
router.post("/product", productController.postProduct );

router.get("/", productController.getIndex);

module.exports = router;