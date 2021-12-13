const bcrypt = require("bcrypt");
const userModel  = require("../../db/models/userModel")

const newUser = async(req, res) => {
  let { name, email, password ,isAdmin} = req.body;
  try {
      password = await bcrypt.hash(password,10);
      const regestried = new userModel({ name, email, password ,isAdmin});
      const response = await regestried.save();
      res.status(201).json(response);
  } catch (error) {
      res.send(error)
  }
};

module.exports = { newUser };
