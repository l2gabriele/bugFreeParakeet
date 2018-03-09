var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdventureSchema   = new Schema({
  storyPremise: String,
  optionOne: String,
  optionTwo: String,
  keyValue: {type: String, unique : true},
});

module.exports = mongoose.model('Adventure', AdventureSchema);
