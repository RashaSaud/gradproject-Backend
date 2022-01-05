const express = require("express");
const loginRoute = express.Router();

const { logIn  } = require("../controllers/logIn");
// const { authentication } = require("../middlewares/authentication");

loginRoute.post("/login",logIn);

module.exports = loginRoute;