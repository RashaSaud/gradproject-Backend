const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");

const logIn = async (req, res) => {
  let { email, password } = req.body;

  console.log(email ,"emaillll hereeeeeeee")

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const check = await bcrypt.compare(password, user.password);
      if (check === true) {
        const payload = { userId: user._id, userName: user.name ,isAdmin:user.isAdmin };
        const token = jwt.sign(payload, "ABC");
        
        res.status(200).json({ token,isAdmin:user.isAdmin,userId: user._id});
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



module.exports = { logIn };
