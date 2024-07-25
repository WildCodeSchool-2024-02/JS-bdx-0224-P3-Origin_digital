const multer = require("multer");

// Configuration de Multer pour utiliser diskStorage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Determine the destination based on the file's MIME type
    if (file.mimetype.startsWith("image/")) {
      cb(null, "public/assets/images/");
    } else if (file.mimetype.startsWith("video/")) {
      cb(null, "public/assets/videos/");
    } else {
      cb(new Error("Invalid file type"), null);
    }
  },
  filename: (req, file, cb) => {
    const date = Date.now();
    cb(null, `${date}-${file.originalname}`);
  },
});

const formatVideoData = (req, res, next) => {
  if (req.files.video_url[0]) {
    const video = req.files.video_url[0];
    req.body.video_url = video.filename;
    delete req.body.token;
    next();
  } else {
    res.status(400).send("No video uploaded.");
  }
};

const formatThumbnail = (req, res, next) => {
  if (req.files.img_url) {
    const image = req.files.img_url[0];
    req.body.img_url = image.filename;
    next();
  } else {
    res.status(400).send("No image uploaded.");
  }
};

const formatVideoAccessTagsCategory = (req, res, next) => {
  if (req.body.access === undefined) req.body.access = false;
  let tagsId = req.body.tags_id;
  if (typeof tagsId === "string") {
    tagsId = [tagsId];
  }
  req.body.tags_id = [];
  tagsId.forEach((tagId) => req.body.tags_id.push(parseInt(tagId, 10)));

  req.body.category_id = parseInt(req.body.category_id, 10);
  next();
};

module.exports = {
  storage,
  formatVideoData,
  formatThumbnail,
  formatVideoAccessTagsCategory,
};
