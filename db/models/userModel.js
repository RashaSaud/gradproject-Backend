const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name: { type: String },
    email: { type: String ,unique:true },
    password: { type: String },
    isAdmin: {
        type: Boolean,
        default: false,
      },

    
  });
  
  module.exports = mongoose.model("userModel", userModel);
  