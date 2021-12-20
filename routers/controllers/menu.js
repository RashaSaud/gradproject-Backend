const menuModel = require("../../db/models/menuModel")

const getMenu = async (req,res)=>{
 
  
      try {
           const menuList = await menuModel.find({})
           console.log(menuList,"hhhh")
          res.status(200).json(menuList)
      } catch (error){
          res.send(error)
      }
  }
const menuPost = async (req, res)=>{
    const { foodName, foodImg , foodDescription , foodPrice } = req.body;
    const newMenu = new menuModel({
        Foodname:foodName, 
        FoodImg:foodImg,
        FoodDescription:foodDescription,
        FoodPrice:foodPrice,
        
    
    })
    try {
        const savedMenu = await newMenu.save()
        res.status(200).json(savedMenu)

    }catch (error){
        res.send(error)
    }
}
const deleteItem = async (req, res) => {
    const id = req.params.id;
    console.log(id)

    try {
   
      const deleted = await menuModel.findOneAndDelete({ _id: id });
  console.log(deleted)
      res.status(200).json([deleted , "deleted"]);
  }catch (err) {
      res.send(err , "err");
    } 
  };

//   const updateItem = async(req,res)=>{
//       const id = req.params.id
//      const {NewName ,NewImg,NewDes,NewPrice}=req.body


//       try{
// const updateItem = await menuModel.findOneAndUpdate({_id:id,Foodname:NewName,
// FoodImg:NewImg,FoodDescription:NewDes,FoodPrice:NewPrice})
// // console.log(updateItem,"hhhi")
// res.status(200).json([updateItem ,"updated"])
//       }
//       catch(err){
// res.send(err,"error")
//       }
//   }

 
const updateItem = async (req, res) => {
    const id = req.params.id;
    const { newName,newImg,newDes,newPrice } = req.body;
    try {
      const response = await menuModel.findOneAndUpdate(
        { _id: id },
        { Foodname: newName ,
            FoodImg:newImg,
            FoodDescription:newDes,
            FoodPrice:newPrice},
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  };
  

module.exports = {getMenu, menuPost ,deleteItem,updateItem}