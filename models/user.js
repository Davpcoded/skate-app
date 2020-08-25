const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  firstName: {
    type: String,
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
  },

  username: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  password: {
    type: String,
    required: true,
  },

  boolean: Boolean,

  array: Array,
});

const User = mongoose.model("User", user);

module.exports = User;
