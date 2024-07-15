const multer = require("multer");
const path = require("path");

// Configuration de Multer pour utiliser diskStorage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Chemin de destination des fichiers uploadés
    cb(null, "public/assets/videos/");
  },
  filename: (req, file, cb) => {
    // Construire le nom du fichier avec son nom d'origine et l'extension d'origine, autrement le fichier ne possède pas d'extension
    // le Date.now() permet de renommer le fichier afin qu'ils soient tous unique, c'est une façon simple de s'assurer de l'unicité des fichiers
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploadController = (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  // Le nom du fichier stocké est accessible via req.file.filename
  const imageName = req.file.filename;
  console.info(imageName);
  return res
    .status(201)
    .send({ message: "Video uploaded successfully", filename: imageName });
};

module.exports = {
  storage,
  uploadController,
};
