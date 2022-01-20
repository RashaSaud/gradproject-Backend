const mongoose = require("mongoose");

cartModel = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel' },
    itemId:{type: mongoose.Schema.Types.ObjectId, ref:'menuModel'},
    quantity: {type: Number, default: 1},
 
})

module.exports = mongoose.model("cartModel", cartModel);
