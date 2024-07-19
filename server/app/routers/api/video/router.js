const express = require("express");
const multer = require("multer");

const router = express.Router();

const video = require("../../../controllers/videoActions");
const {
  formatVideoData,
  storage,
} = require("../../../services/middlewares/fileUploader");
const {
  getIdFromToken,
} = require("../../../services/middlewares/getIdFromToken");
const validateVideo = require("../../../services/middlewares/validateVideo");

const upload = multer({ storage });

router.get("/", video.browse);
router.get("/:id", video.read);

router.post(
  "/",
  upload.single("video_url"),
  getIdFromToken,
  formatVideoData,
  validateVideo,
  video.add
);

// router.use(verifyToken);


router.put("/:id", video.edit);
router.delete("/:id", video.destroy);

module.exports = router;
