const express = require("express");

const router = express.Router();
const auth = require("../../../controllers/authActions");

router.post("/login", auth.login);

module.exports = router;
