const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

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




router.post('/getphotos', getPhotos)
router.post('/user', registerUser)
router.post('/savePhotos', savePhotos)

module.exports = router;