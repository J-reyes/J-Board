const mongoose = require('mongoose')

var PersonSchema = new mongoose.Schema({
  email: String,
  password: String,
  is_admin: Boolean
});

var Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
