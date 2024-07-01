const express = require("express");

const router = express.Router();

const tag = require("../../../controllers/tagActions");

router.get("/", tag.browse);
router.get("/:id", tag.read);
router.put("/:id", tag.edit);
router.post("/", tag.add);
router.delete("/:id", tag.destroy);

module.exports = router;
