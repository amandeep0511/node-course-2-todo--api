const mongoose = require('mongoose');

var User = mongoose.model('User',{
  email:{
    type: String,
    trim: true,
    minLength: 1
  }
});

module.exports = {User};
