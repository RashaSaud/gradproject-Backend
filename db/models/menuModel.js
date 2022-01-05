const mongoose = require("mongoose");

let menuModel = new mongoose.Schema({
    Foodname: { type: String },
    FoodImg: { type: String},
    miniImg1:{type:String},
    miniImg2:{type:String},
    miniImg3:{type:String},
    FoodDescription: { type: String },
    FoodPrice:{type:String},
    client:{type: mongoose.Schema.Types.ObjectId, ref:"userModel"},
itemId:{type: mongoose.Schema.Types.ObjectId, ref:"menuModel"}
  });
  

  module.exports = mongoose.model("menuModel", menuModel);
  