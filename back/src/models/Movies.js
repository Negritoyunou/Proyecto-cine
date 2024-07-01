const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    
    title: { type: String },
    url: { type: String },
    director: { type: String },
    year: { type: Number },
    duration: { type: String },
    genre: { type: String },
    rate: { type: Number },

});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies