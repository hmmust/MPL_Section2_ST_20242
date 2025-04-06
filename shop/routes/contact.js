const express = require("express");
const contactController = require("../controllers/contact");
const router = express.Router();

router.get("/",contactController.getIndex);
router.get("/contact",contactController.getContact);
router.get("/contactus",contactController.getContactUs);

module.exports= router;