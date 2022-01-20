const express = require("express");
const cartRoute = express.Router();

const {getCart ,addItemToCart,deleteItem,deleteAllItem ,clearCart} = require("../controllers/cart");
const { authentication } = require("../middlewares/authentication");

cartRoute.get("/cart",authentication,getCart);
cartRoute.post("/addTocart/:id" ,authentication,addItemToCart)
cartRoute.delete("/delete/:id" ,authentication,deleteItem)
cartRoute.delete("/deleteAllItem/:id" ,authentication,deleteAllItem)
cartRoute.delete("/clearCart" ,authentication,clearCart)


module.exports = cartRoute;                    