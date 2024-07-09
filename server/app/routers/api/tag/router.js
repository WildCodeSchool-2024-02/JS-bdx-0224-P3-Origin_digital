const express = require("express");

const router = express.Router();

const tag = require("../../../controllers/tagActions");
const { verifyToken } = require("../../../services/middlewares/auth");

router.get("/", tag.browse);
router.get("/:id", tag.read);

router.use(verifyToken);

router.put("/:id", tag.edit);
router.post("/", tag.add);
router.delete("/:id", tag.destroy);

module.exports = router;
