const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* 
Create Count Model. 
We will only need one object that keeps
track of 'ids' used and words 'counted'.
*/
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
