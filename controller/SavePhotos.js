const User = require('../model/user')
const Photo = require('../model/photo')
const cloudinary = require('cloudinary')

module.exports = {
  savePhotos: async(req, res) => {
    const {
      timestamp,
      email,
    } = req.body;
    try {

      const user = await User.findOne({
        email
      });
      if (!user || Object.keys(user).length == 0)
        return res.status(403).json({
          'error': "Cannot upload photo not an authentic user"
        });
      else {

        cloudinary.config({
          cloud_name: 'bmayank',
          api_key: 289332314498966,
          api_secret: 'n1BAYe6ZObhnGVPkIvIqedyRyvE'
        })

        cloudinary.v2.uploader.upload(req.file.path, async(error, result) => {
          if (error) {
            console.log('err', error)
            return res.status(400).json({
              "msg": "Upload to cloud failed"
            });
          } else {
            console.log(result)
            const url = result.secure_url
            const newPhoto = new Photo({
              timestamp,
              userId: user._id,
              url: result.secure_url,
              height: result.height,
              width: result.width
            });
            try {
              await newPhoto.save();
              return res.status(200).json({
                "msg": "Image has been uploaded successfully"
              });
            } catch (err) {
              if (err) {
                console.log(err)
                return res.status(403).send({
                  "msg": "Upload to server failed"
                });
              }
            }
          }

        })
      }

    } catch (err) {
      if (err) {
        console.log(err)
        return res.status(500).send({
          "msg": "Internal Server Error"
        });
      }
    }
  }
};