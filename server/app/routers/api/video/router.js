const express = require("express");
const multer = require("multer");

const router = express.Router();

const video = require("../../../controllers/videoActions");
const {
  verifyToken,
} = require("../../../services/middlewares/tokenVerification");
const {
  uploadController,
  storage,
} = require("../../../controllers/uploadController");

const upload = multer({ storage });

router.get("/", video.browse);
router.get("/:id", video.read);

router.use(verifyToken);

router.put("/:id", video.edit);
router.post("/", video.add);
router.delete("/:id", video.destroy);

router.post("/upload", upload.single("video"), uploadController);

module.exports = router;
