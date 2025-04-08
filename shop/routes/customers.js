const customerController= require("../controllers/customer");

const express = require("express");
const router = express.Router();
router.get("/addcustomer", customerController.getAddCustomer );
router.get("/updatecustomer", customerController.getEditCustomer);

module.exports = router;