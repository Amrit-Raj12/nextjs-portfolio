const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: [true, "Please enter a name"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter a email"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  phone: {
    type: String,
    required: [true, "Please enter Phone number"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  rePassword: {
    type: String,
    required: [true, "Please enter re-password"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
});

module.exports =
  mongoose.models.Register || mongoose.model("Register", RegisterSchema);
