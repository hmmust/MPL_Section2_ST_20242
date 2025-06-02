const express = require('express');
const authMiddleware = require("../middleware/authMiddleware");
const productRules = require("../validators/productValidator");
const productRequest = require("../validators/productRequest");

const router = express.Router();
const adminController = require("../controllers/admin");
router.get('/add-product',authMiddleware.isAuthenticated,
    adminController.getAddProduct);
router.get('/products',adminController.getProducts);
router.get('/edit-product/:ProductId',adminController.getEditProduct);
router.post('/edit-product',adminController.postEditProduct);
router.post('/add-product',productRules.add,productRequest.validateProduct,adminController.postAddProduct);
router.post('/delete-product',adminController.postDeleteProduct);
module.exports = router;