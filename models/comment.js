const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = model('Comment', CommentSchema);

const pizza = await Pizza.findOne()
pizza.commentCount // 5

module.exports = Comment;