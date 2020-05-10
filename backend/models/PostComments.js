const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModelComment = new Schema({
  Name: {
    type: String
  },
  Email: {
    type: String
  },
  CommentText: {
    type: String
  },
  Website: {
    type: String
  }


});

module.exports = mongoose.model("ModelComment", ModelComment);
