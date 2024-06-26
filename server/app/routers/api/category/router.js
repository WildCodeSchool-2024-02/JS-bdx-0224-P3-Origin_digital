const express = require("express");

const router = express.Router();

const category = require("../../../controllers/categoryActions");

router.get("/", category.browse);
router.get("/:id", category.read);

module.exports = router;
