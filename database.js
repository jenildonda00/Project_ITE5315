const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect('mongodb+srv://jenildonda00:Jenil12@cluster0.ovmqhta.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToDB;
