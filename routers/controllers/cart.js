const cartItemModel = require("../../db/models/cartItemModel");
const menuModel = require("../../db/models/menuModel");
const userModel = require("../../db/models/userModel");



const getCart = async (req, res) => {
  const client = req.token.userId;
  
  try {
    const cart = await cartItemModel.find({client:client}).populate("itemId");
    console.log(cart, "this is cartttt");

    res.status(200).send(cart);
  } catch (err) {
    res.send(err, "errrror");
  }
};

const addItemToCart = async (req, res) => {
  const client = req.token.userId;
  const id = req.params.id;

  try {
    const foundUser = await cartItemModel.findOne({client: client,itemId: id,}).populate('itemId')
    
    console.log(foundUser, "foundd user");
    if (foundUser === null) {
      const newCart = new cartItemModel({
        client: client,
        itemId: id,
        quantity: 1,
      });
      const savedCart = await newCart.save();
      
    }

 
    else {
      let x = foundUser.quantity + 1;
      console.log(x, "xxxxx");
      console.log(foundUser, "usssssser");
      const updaetItem = await cartItemModel.findOneAndUpdate(
        { client: client,itemId: id, },
        { quantity: x },
        {new:true}
      );
      console.log(updaetItem, "updaetItem");

    }

    const cart = await cartItemModel.find({client:client}).populate("itemId");
    res.status(200).send(cart);


  } catch (err) {
    res.send(err, "error");
  }
};

const deleteAllItem = async (req, res) => {
    const client = req.token.userId;
    const id = req.params.id;


    try {
        const del = await cartItemModel.findOneAndDelete({ client: client, itemId: id,}).populate("itemId")
  
        const cart = await cartItemModel.find({client:client}).populate("itemId");
        res.status(200).send(cart);
    } 
    catch (err) {
      res.send(err, "errrror");
    }
  };


const deleteItem = async (req, res) => {
  const client = req.token.userId;
  const id = req.params.id;
try{
  const del = await cartItemModel.findOne({
    client:client,
    itemId:id,
    
  }).populate("itemId");
  if(del.quantity >1){
    let x = del.quantity - 1;
    console.log(x, "xxxxx");
    console.log(del, "usssssser");
    const updaetItem = await cartItemModel.findOneAndUpdate(
      { client: client,itemId: id, },
      { quantity: x },
      {new:true}
    );
 

  }else{
    const delIt = await cartItemModel.findOneAndDelete({
      client: client,
      itemId: id,
    });
  }
  const cart = await cartItemModel.find({client:client}).populate("itemId");
  res.status(200).send(cart);
  console.log(del,"dell")
}catch(err){
  res.send(err)
}
  // if(del.itemId.quantity >=1){
  //   let x = del.quantity - 1;
  //   console.log(x, "xxxxx");
  //   console.log(foundUser, "usssssser");
  //   const updaetItem = await cartItemModel.findOneAndUpdate(
  //     { client: client,itemId: id, },
  //     { quantity: x },
  //     {new:true}
  //   );
  //   console.log(updaetItem, "updaetItem");

  //   res.status(201).json(updaetItem);

  // }

  
  // else{
  //   const delet = await cartItemModel.findOneAndDelete({
  //     client: client,
  //     itemId: id,
  //   });
  //   res.status(200).json([delet,"deleted"]);
  // }
}

module.exports = { getCart, addItemToCart,deleteItem,deleteAllItem };
