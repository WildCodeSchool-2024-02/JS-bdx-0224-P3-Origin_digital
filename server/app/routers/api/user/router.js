const express = require("express");

const router = express.Router();

const user = require("../../../controllers/userActions");

router.get("/", user.browse);
router.get("/:id", user.read);
router.post("/", user.add);
router.delete("/:id", user.destroy);

module.exports = router;
