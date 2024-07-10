const express = require("express");

const router = express.Router();

const video = require("../../../controllers/videoActions");
const {
  verifyToken,
} = require("../../../services/middlewares/tokenVerification");

router.get("/", video.browse);
router.get("/:id", video.read);

router.use(verifyToken);

router.put("/:id", video.edit);
router.post("/", video.add);
router.delete("/:id", video.destroy);

module.exports = router;
