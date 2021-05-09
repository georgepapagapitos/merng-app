const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  dateCreated: Date
});

module.exports = model('User', userSchema);