var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  adresse: String,
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

var c = new User({nom : "Test", prenom : "test1"});
c.adresse = "Testville";
c.save(function(){
  var users = User.find();
  console.log(users);
});

console.log(c);