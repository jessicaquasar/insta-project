const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    author: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      default: 0
    },
    place: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
