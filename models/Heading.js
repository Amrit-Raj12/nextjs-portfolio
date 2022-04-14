const mongoose = require("mongoose");

const HeadingSchema = new mongoose.Schema({
  // For Heading
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  subTitle: {
    type: String,
    required: true,
    maxlength: [80, "Sub-Title cannot be more than 80 characters"],
  },
  // For About
  aboutTitle: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  aboutDescription: {
    type: String,
    required: true,
    maxlength: [400, "aboutDescription cannot be more than 400 characters"],
  },
});

module.exports =
  mongoose.models.Heading || mongoose.model("Heading", HeadingSchema);
