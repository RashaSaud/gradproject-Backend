const mongoose = require("mongoose");

const menuModel = new mongoose.Schema({
    Foodname: { type: String },
    FoodImg: { type: String},
    FoodDescription: { type: String },
    FoodPrice:{type:String},

  });
  
  module.exports = mongoose.model("menuModel", menuModel);
  