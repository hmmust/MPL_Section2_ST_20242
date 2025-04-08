const errorsController= require("../controllers/errors");

const express = require("express");
const router = express.Router();
router.all("*",errorsController.get404);

module.exports = router;