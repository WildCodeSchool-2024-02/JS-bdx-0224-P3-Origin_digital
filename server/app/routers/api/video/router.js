const express = require("express");
const multer = require("multer");

const router = express.Router();

const video = require("../../../controllers/videoActions");
const {
  verifyToken,
} = require("../../../services/middlewares/tokenVerification");
const {
  uploadVideo,
  storage,
} = require("../../../services/middlewares/fileUploader");
const validateVideo = require("../../../services/middlewares/validateVideo");

const upload = multer({ storage });

router.get("/", video.browse);
router.get("/:id", video.read);

router.use(verifyToken);

router.post("/", video.add);
router.post(
  "/upload",
  upload.single("file"),
  uploadVideo,
  validateVideo,
  video.add
);

router.put("/:id", video.edit);
router.delete("/:id", video.destroy);

module.exports = router;
