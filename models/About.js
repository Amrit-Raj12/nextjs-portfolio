const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [400, "description cannot be more than 400 characters"],
  },
});

module.exports = mongoose.models.About || mongoose.model("About", AboutSchema);
