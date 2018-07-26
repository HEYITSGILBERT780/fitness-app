var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/fitness_api');

mongoose.Promise;

module.exports.workout = require('./workout');
module.exports.meals = require('./meals');