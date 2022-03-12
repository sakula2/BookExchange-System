const { model, Schema } = require('mongoose');
let validator = require('validator')

const profileSchema = new Schema({
  genre: String,
  education: String,
  profession: String,
  phone: String,
  city: String,
  profileCreatedAt: String,
  points: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Profile', profileSchema);