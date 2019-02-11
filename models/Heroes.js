var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var heroes = new Schema({
    id:Number,
    name:String
    
  }, {
      timestamps:true

});


module.exports = mongoose.model('heroe', heroes);


