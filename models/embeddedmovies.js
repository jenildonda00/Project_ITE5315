const mongoose = require('mongoose');

const embeddedMovieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  writers: [String],
  awards: {
    wins: Number,
    nominations: Number,
    text: String
  },
  lastupdated: Date,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number
    },
    production: String,
    lastUpdated: Date
  },
  plot_embedding: [String] 
});

const EmbeddedMovie = mongoose.model('EmbeddedMovie', embeddedMovieSchema);

module.exports = EmbeddedMovie;
