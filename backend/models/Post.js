const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      trim: true,
      minLength: 3,
    },
    content: {
      type: String,
      required: [true, "Post content is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);