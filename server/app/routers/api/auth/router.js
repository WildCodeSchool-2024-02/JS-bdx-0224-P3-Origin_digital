const express = require("express");

const router = express.Router();
const authController = require("../../../controllers/authActions");

router.post("/", authController.login);

module.exports = router;