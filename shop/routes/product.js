const productController= require("../controllers/product");

const express = require("express");
const router = express.Router();
router.get("/add", productController.getProduct );
router.post("/add", productController.postProduct );

router.get("/", productController.getIndex);

module.exports = router;