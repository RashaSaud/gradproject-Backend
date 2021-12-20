const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");

const logIn = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const check = await bcrypt.compare(password, user.password);
      if (check === true) {
        const payload = { userId: user._id, userName: user.name ,isAdmin:user.isAdmin };
        const token = jwt.sign(payload, "ABC");
        
        res.status(200).json({ token,isAdmin:user.isAdmin  });
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  
    
  } catch (error) {
    res.send(error);
  }
}

// const admin = async(req,res)=>{
//   let {email , password} = req.body
//   try {
//     const admin = await userModel.findOne({email})
//     if(admin){
//       const check = await bcrypt.compare(password, admin.password);
// if (check== true){
//   const isAdmin = await userModel.findOne({isAdmin})
//     const payload = { userId: admin._id, userName: admin.name };
//     const token = jwt.sign(payload, "ABC");
//     res.status(200).json({ token ,isAdmin:true});
//   }
// }
  

//   }catch(err){
//     res.send(err);

//   }
// }
// const admin = async(res,req)=> {
//   const valid = jwt.verify(token, "ABC");
//   if (!token) {

//     res.status(401).send("No User"); } 
//     else {
//    try {
//        const valid = verify(token, "ABC");
//        req.user = valid;
//        const user = await userModel.findOne({isAdmin});
//        if (req.user && user.isAdmin == true) {
        
//        }
//    } catch (err) {
//         res.status(401).send("Admin token is not exists");
//    }
//   }
//  }

// const admin = async (req,res)=>{
//   let {email , password} = req.body
//   try{
//     const admin = await userModel.findOne({email:email})
//     if(admin){
//       const check = await bcrypt.compare(password, admin.password);
//       // const isAdmin = await userModel.findOne({isAdmin})
//       if (req.body.email && admin.email == true) {
//         const payload = { email: admin.email, userName: admin.name };
//         const token = jwt.sign(payload, "ABC");
//         res.status(200).json({ token });
//       } else {
//         res.status(403).json("wrong passWord!!!");
//       }
//     } else {
//       res.status(404).json("wrong Email!");
//     }
//   } catch (error) {
//     res.send(error);
//   }
//     }

  

// const admin =async (req, res) => { 
//   let userData = req.body;
//   userModel.findOne({ email: userData.email }, (error, user) => {
//     if (error) {
//       console.log(error);
//     } else {
//       if (!user) {
//         res.status(403).send('Invalid email');
//       } else
//       if (user.password !== userData.password) {
//         res.status(403).send('Invalid password')
//       } else {
//         if (user.isAdmin) { 
//           console.log('admin'); 
//           res.status(200).send(user.isAdmin)         
//         }
//         let payload = { userId: user._id };
//         let token = jwt.sign(payload, 'ABC');
//         res.status(200).send({ token });
//       }
//   }
//   })
// } 



module.exports = { logIn };
