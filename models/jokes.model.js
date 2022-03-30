const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true
    },
    joke: {
        type: String,
        required: true
    },
    
}, 
{ timestamps: true });
 
const Jokes = mongoose.model('Joke', JokesSchema);
 
module.exports = Jokes;