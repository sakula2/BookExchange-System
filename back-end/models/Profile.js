const { model, Schema } = require('mongoose');
let validator = require('validator')

const profileSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  city: String,
  country: String,
  exchange_points: String,
  created_at: String
});

module.exports = model('Profile', profileSchema);