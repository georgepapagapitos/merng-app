const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: String,
  username: String,
  date: Date,
  comments: [
    {
      body: String,
      username: String,
      date: Date
    },
  ],
  likes: [
    {
      username: String,
      date: Date
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);