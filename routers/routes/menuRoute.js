const express = require("express");
const menuModel = express.Router();
const {authentication} = require("../middlewares/authentication")
const { menuPost,getMenu,deleteItem,updateItem,getOneItem} = require("../controllers/menu")
menuModel.post("/menu",menuPost);
menuModel.get("/menu",getMenu);
menuModel.delete("/menu/:id" ,authentication,deleteItem);
menuModel.put("/update/:id",updateItem)
menuModel.get("/menue/:id",getOneItem)
module.exports = menuModel;
