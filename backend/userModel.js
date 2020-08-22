const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 4,
    select: false,
  },
});

module.exports = mongoose.model("User", user);
