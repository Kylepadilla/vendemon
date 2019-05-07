const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AlertSchema = new Schema({
  Team_ID: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  City: {
    type: String,
    required: false
  },
  Description: {
    type: String,
    required: false
  },
  post_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Alert = mongoose.model("alerts", AlertSchema);