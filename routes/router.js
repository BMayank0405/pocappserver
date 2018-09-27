const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer')
const {
  savePhotos
} = require("../controller/SavePhotos")
const {
  getPhotos
} = require("../controller/GetPhotos")
const {
  registerUser
} = require("../controller/User")

router.use(bodyParser.urlencoded({
  extended: false
}));
router.use(bodyParser.json());


const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, Date.now(), file.originalname)
  }
})

const upload = multer({
  storage
}).single('image')

router.post('/getphotos', getPhotos)
router.post('/user', registerUser)
router.post('/savePhotos', upload, savePhotos)

module.exports = router;