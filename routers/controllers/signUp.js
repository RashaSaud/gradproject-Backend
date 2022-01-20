const bcrypt = require("bcrypt");
const cartItemModel = require("../../db/models/cartItemModel");
const userModel  = require("../../db/models/userModel")

const newUser = async(req, res) => {
  let { name, email, password ,isAdmin} = req.body;
  try {
      password = await bcrypt.hash(password,10);
      const registered = new userModel({ name, email, password ,isAdmin});
      const response = await registered.save();
      console.log(response)

      res.status(201).json(response)

  } catch (error) {
      res.send(error)
  }
};

module.exports = { newUser };
