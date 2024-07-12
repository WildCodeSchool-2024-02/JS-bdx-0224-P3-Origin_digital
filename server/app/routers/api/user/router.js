const express = require("express");

const router = express.Router();
const userCheckRole = require("../../../services/middlewares/userCheckRole");
const user = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/middlewares/hashing");
const {
  verifyToken,
} = require("../../../services/middlewares/tokenVerification");
const validateUser = require("../../../services/middlewares/validateUser");

router.get("/", user.browse);
router.get("/:id", user.read);
router.post("/", userCheckRole, validateUser, hashPassword, user.add);
router.delete("/:id", verifyToken, user.destroy);

module.exports = router;