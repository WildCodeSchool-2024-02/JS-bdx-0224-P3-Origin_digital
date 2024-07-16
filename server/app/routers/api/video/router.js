const express = require("express");
const multer = require("multer");

const router = express.Router();

const video = require("../../../controllers/videoActions");
const {
  uploadVideo,
  storage,
} = require("../../../services/middlewares/fileUploader");
const {
  getIdFromToken,
} = require("../../../services/middlewares/getIdFromToken");

const upload = multer({ storage });

router.get("/", video.browse);
router.get("/:id", video.read);


router.post("/", upload.single("video_url"), getIdFromToken, uploadVideo);

// router.use(verifyToken);


router.put("/:id", video.edit);
router.delete("/:id", video.destroy);

module.exports = router;
