const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spots = new Schema({
  description: {
    type: String,
    trim: true,
  },

  location: {
    type: Array,
    trim: true,
  },

  category: {
    type: String,
    trim: true,
  },

  boolean: Boolean,

  array: Array,
});

const Spots = mongoose.model("Spots", spots);

module.exports = Spots;
