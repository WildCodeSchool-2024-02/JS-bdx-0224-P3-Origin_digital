const express = require("express");

const router = express.Router();
const userCheckRole = require("../../../services/middlewares/userCheckRole");
const user = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/middlewares/auth");

router.get("/", user.browse);
router.get("/:id", user.read);
router.post("/", userCheckRole, hashPassword, user.add);
router.delete("/:id", user.destroy);

module.exports = router;
