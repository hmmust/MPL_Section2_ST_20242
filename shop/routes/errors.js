const express = require("express");
const errorController = require("../controllers/errors");

const router = express.Router();

router.all("*",errorController.get404);

module.exports = router;