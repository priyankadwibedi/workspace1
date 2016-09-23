var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    ImdbID:String,
    Poster:String,
    Title: String,
    Year: String,

});

module.exports = mongoose.model('Movie', movieSchema);
