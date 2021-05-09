const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: String,
  username: String,
  date: String,
  comments: [
    {
      body: String,
      username: String,
      date: String
    },
  ],
  likes: [
    {
      username: String,
      date: String
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);