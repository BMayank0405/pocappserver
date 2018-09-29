const User = require('../model/user')
const Photo = require('../model/photo')
const cloudinary = require('cloudinary')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage
}).single('image')

module.exports = {
  savePhotos: async(req, res) => {

return res.status(200).json({
      "msg": "done"
    })
    // upload(req, res, (err) => {
    //     if (err) return res.status(200).json({
    //       "msg": "done"
    //     })
    //     else {
    //       console.log(req.file)
    //       return res.status(200).json({

    //         "msg": "done"
    //       })
    //     }
    //   })
      // try {


    //   const user = await User.findOne({
    //     email
    //   });
    //   if (!user || Object.keys(user).length == 0)
    //     return res.status(403).json({
    //       'error': "Cannot upload photo not an authentic user"
    //     });
    //   else {

    //     cloudinary.config({
    //       cloud_name: 'bmayank',
    //       api_key: 289332314498966,
    //       api_secret: 'n1BAYe6ZObhnGVPkIvIqedyRyvE'
    //     })

    //     cloudinary.uploader.upload(req.file.path, async(result) => {
    //       const url = result.secure_url;
    //       const newPhoto = new Photo({
    //         timestamp,
    //         userId,
    //         url
    //       });
    //       try {
    //         await newPhoto.save();
    //         return res.status(200).json({
    //           user
    //         });
    //       } catch (err) {
    //         if (err)
    //           return res.status(403).send({
    //             error: err.errmsg
    //           });
    //       }
    //     })
    //   }

    // } catch (err) {
    //   if (err)
    //     return res.status(403).send({
    //       error: err.errmsg
    //     });
    // }
  }
};

//Campground is model name