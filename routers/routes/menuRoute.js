const express = require("express");
const menuModel = express.Router();
const {authentication} = require("../middlewares/authentication")
const { menuPost,getMenu,deleteItem,updateItem} = require("../controllers/menu")
menuModel.post("/menu",menuPost);
menuModel.get("/menu",getMenu);
menuModel.delete("/menu/:id" ,authentication,deleteItem);
menuModel.put("/update/:id",updateItem)

module.exports = menuModel;
