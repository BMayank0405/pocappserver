const Photo = require("../model/photo");

module.exports = {
  getPhotos: async(req, res, next) => {
    let {
      startTime,
      endTime
    } = req.body;
    console.log(value, startTime, endTime)
    try {
      let photos_Array = await Photo.find({
        timestamp: {
          $gte: startTime,
          $lt: endTime
        }
      })

      res.status(200).json(photos_Array);
    } catch (err) {
      if (err) return res.status(500).send({
        error: err.errmsg
      });
    }
  }
};