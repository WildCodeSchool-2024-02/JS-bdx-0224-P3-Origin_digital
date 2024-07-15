const express = require("express");

const router = express.Router();

const role = require("../../../controllers/roleActions");

router.get("/", role.browse);
router.get("/:id", role.read);

module.exports = router;
