const User = require('../model/user')
const Photo = require('../model/photo')
const cloudinary = require('cloudinary')

module.exports = {
  savePhotos: async(req, res) => {
    console.log(req.body)
    console.log("file", req.file)

    try {

      // const user = await User.findOne({
      //   email
      // });
      // if (!user || Object.keys(user).length == 0)
      //   return res.status(403).json({
      //     'error': "Cannot upload photo not an authentic user"
      //   });
      // else {

      cloudinary.config({
        cloud_name: 'bmayank',
        api_key: 289332314498966,
        api_secret: 'n1BAYe6ZObhnGVPkIvIqedyRyvE'
      })

      cloudinary.uploader.upload(req.file.path, async(error, result) => {
          if (error) {
            console.log('err', error, result)
            return res.status(400).json({
              "msg": "not done"
            });
          } else {
            console.log(result)
              // const url = result.secure_url;
              // const newPhoto = new Photo({
              //   timestamp,
              //   userId: user.userId,
              //   url
              // });
              // try {
              //   await newPhoto.save();
              //   return res.status(200).json({
              //     user
              //   });
              // } catch (err) {
              //   if (err)
              //     return res.status(403).send({
              //       error: err.errmsg
              //     });
              // }
          }

        })
        // }

    } catch (err) {
      if (err)
        return res.status(403).send({
          error: err.errmsg
        });
    }
  }
};

//Campground is model name