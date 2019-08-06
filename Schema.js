const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CountSchema = new Schema({
  key: {
    type: Number,
    default: 1
  },
  ids: {
    type: Array,
    required: true,
    default: []
  },
  counted: {
    type: Number,
    required: true
  }
});

module.exports = Count = mongoose.model("count", CountSchema);
