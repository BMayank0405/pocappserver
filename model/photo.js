const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotoSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Photo = mongoose.model('Photo', PhotoSchema);
module.exports = Photo;