const express = require("express");

const router = express.Router();

const video = require("../../../controllers/videoActions");

router.get("/", video.browse);
router.get("/:id", video.read);
router.put("/:id", video.edit);
router.post("/", video.add);
router.delete("/:id", video.destroy);

module.exports = router;
