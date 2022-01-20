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

  const getOneItem = async(req,res)=>{
    const id = req.params.id;
  
    try{

      const oneItem = await menuModel.findById({_id:id})
 
      res.status(201).json(oneItem)
      console.log({oneItem},"thhissssssss item")
    }catch(err){
      res.send(err)
    }
  }



const menuPost = async (req, res)=>{
    const { foodName, foodImg , foodDescription , foodPrice ,MiniImg1,MiniImg2} = req.body;
    const newMenu = new menuModel({
        Foodname:foodName, 
        FoodImg:foodImg,
        miniImg1:MiniImg1,
        miniImg2:MiniImg2,
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


 
const updateItem = async (req, res) => {
    const id = req.params.id;
    const { newName,newImg,newDes,newPrice,newimg1,newimg2 } = req.body;
    try {
      const response = await menuModel.findOneAndUpdate(
        { _id: id },
        { Foodname: newName ,
            FoodImg:newImg,
            FoodDescription:newDes,
            FoodPrice:newPrice},
        
    {new:true}
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  };
  

module.exports = {getMenu, menuPost ,deleteItem,updateItem,getOneItem}