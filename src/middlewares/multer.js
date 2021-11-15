const multer = require('multer');

const upload = multer.diskStorage({
  destination: (_req, file, callback) => {
    callback(null, 'src/uploads');
  },
  filename: (req, file, callback) => {
    callback(null, `${req.params.id}.jpeg`);
  },
});

module.exports = multer({ upload }).single('image');
