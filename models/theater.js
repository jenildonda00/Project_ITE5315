const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  theaterId: Number,
  location: {
    address: {
      street1: String,
      city: String,
      state: String,
      zipcode: String
    },
    geo: {
      type: String,
      coordinates: [Number]
    }
  }
});

const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;
