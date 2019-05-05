const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AlertSchema = new Schema({
  team_id: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  est_Cost: {
    type: String,
    required: true
  },
  job_Type: {
    type: String,
    required: true
  },
  job_Description: {
    type: String,
    required: true
  },
  post_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Alert = mongoose.model("alerts", AlertSchema);