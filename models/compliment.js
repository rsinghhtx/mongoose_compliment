// How can we set up the Compliment model to talk to our database?
// Look at past examples

var mongoose = require('mongoose');


var schema = new mongoose.Schema ({
  compliment: {type: String, required: true}
});
//coollections named off of single documents but are made plural
var Compliment = mongoose.model('Compliment', schema);



// Make this available to our other files
module.exports = Compliment;
