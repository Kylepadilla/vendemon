const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const AlertSchema = new Schema({
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
  Bath: {
    type: String,
    required: false
  },
  Bedrooms: {
    type: String,
    required: false
  },
  Pool: {
    type: String,
    required: false,
    default: false
  },
  sqft: {
    type: String,
    required: false
  },
  realtor: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  },
  post_date: {
    type: Date,
    default: Date.now
  }
});

const Alert =  mongoose.model("alerts", AlertSchema)

module.exports = Alert