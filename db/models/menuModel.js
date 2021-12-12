const mongoose = require("mongoose");

const menuModel = new mongoose.Schema({
    Foodname: { type: String },
    FoodImg: { type: Image},
    FoodDescription: { type: String },
  });
  
  module.exports = mongoose.model("menuModel", menuModel);
  