const express = require("express");

const router = express.Router();
const userCheckRole = require("../../../services/middlewares/userCheckRole");
const user = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/middlewares/hashing");
const {
  verifyToken,
} = require("../../../services/middlewares/tokenVerification");
const validateUser = require("../../../services/middlewares/validateUser");
const { getIdFromToken } = require("../../../services/middlewares/getIdFromToken");

router.post("/", userCheckRole, validateUser, hashPassword, user.add);

router.use(verifyToken);

router.get("/:id", user.read);
router.get("/", getIdFromToken, user.read)
router.delete("/:id", user.destroy);

module.exports = router;