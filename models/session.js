const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  user_id: String,
  jwt: String
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
