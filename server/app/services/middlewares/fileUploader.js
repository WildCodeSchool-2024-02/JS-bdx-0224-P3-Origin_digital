const multer = require("multer");

// Configuration de Multer pour utiliser diskStorage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Chemin de destination des fichiers uploadés
    cb(null, "public/assets/videos/");
  },
  filename: (req, file, cb) => {
    // Construire le nom du fichier avec son nom d'origine et l'extension d'origine, autrement le fichier ne possède pas d'extension
    // le Date.now() permet de renommer le fichier afin qu'ils soient tous unique, c'est une façon simple de s'assurer de l'unicité des fichiers
    const date = new Date(Date.now()).toISOString().substring(0, 16);
    cb(null, `${date}-${file.originalname}`);
  },
});

const formatVideoData = (req, res, next) => {
  if (req.file) {
    const video = req.file;
    req.body.video_url = video.filename;
    if (req.body.access === undefined) req.body.access = false;
    if (typeof req.body.tags_id === "string") {
      req.body.tags_id = [req.body.tags_id];
    }
    delete req.body.token;
    next();
  } else {
    res.status(400).send("No video uploaded.");
  }
};

const uploadImage = (req, res, next) => {
  if (req.file) {
    const image = req.file;
    console.info(image);
    req.body.img_url = image;
    next();
  } else {
    res.status(400).send("No image uploaded.");
  }
};

module.exports = {
  storage,
  formatVideoData,
  uploadImage,
};
