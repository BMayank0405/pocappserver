const Photo = require("../model/photo");

module.exports = {
  getPhotos: async(req, res, next) => {
    let {
      startTime,
      endTime,
      email
    } = req.body;

    try {
      let user = await User.findOne({
        email
      });

      try {
        let photos_Array = await Photo.find({
          $and: [{
            timestamp: {
              $gte: startTime,
              $lt: endTime
            }
          }, {
            userId: user._id
          }]
        })

        res.status(200).json(photos_Array);
      } catch (e) {
        console.log(err)
        if (err) return res.status(500).send({
          "msg": "Image fetch has failed.Please try again later."
        });
      }
    } catch (err) {
      {
        console.log(err)
        if (err) return res.status(500).send({
          "msg": "Image fetch has failed.Please try again later."
        });
      }
    }
  }
};