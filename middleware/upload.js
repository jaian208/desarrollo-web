const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        if (file.fieldname === 'avatar') {
            cb(null, 'public/images/home/avatars');
        }
        else if (file.fieldname === 'imagen_portada') {
            cb(null, 'public/images/home/portada');
        }
        else {
            cb(null, 'public/images/home');
        }

    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        req.fileValidationError = 'Solo imágenes';
        cb(null, false);
    }
};

const upload = multer({
    storage,
    fileFilter
});

module.exports = upload;