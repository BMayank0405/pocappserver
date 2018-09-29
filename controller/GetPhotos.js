const Photo = require("../model/photo");

module.exports = {
  getPhotos: async(req, res, next) => {
    let {
      startTime,
      endTime
    } = req.body;

    try {

      let photos_Array = await Photo.find({
        timestamp: {
          $gte: startTime,
          $lt: endTime
        }
      })

      res.status(200).json(photos_Array);
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