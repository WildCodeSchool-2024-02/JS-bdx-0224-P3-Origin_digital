const express = require("express");
const multer = require("multer");

const router = express.Router();

const {
  verifyToken,
} = require("../../../services/middlewares/tokenVerification");
const video = require("../../../controllers/videoActions");
const {
  storage,
  formatVideoData,
  formatThumbnail,
  formatVideoAccessTagsCategory,
} = require("../../../services/middlewares/multerFormat");
const {
  getIdFromToken,
} = require("../../../services/middlewares/getIdFromToken");
const validateVideo = require("../../../services/middlewares/validateVideo");

const upload = multer({ storage });

router.get("/:id", video.read);

router.use(verifyToken);

router.get("/", getIdFromToken, video.browse);

router.delete("/:id", video.destroy);

router.post(
  "/",
  upload.fields([
    { name: "video_url", maxCount: 1 },
    { name: "img_url", maxCount: 1 },
  ]),
  getIdFromToken,
  formatVideoData,
  formatThumbnail,
  formatVideoAccessTagsCategory,
  validateVideo,
  video.add
);



router.put("/:id", video.edit);
router.delete("/:id", video.destroy);

module.exports = router;
