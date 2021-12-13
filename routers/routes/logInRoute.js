const express = require("express");
const loginRoute = express.Router();

const { logIn , admin } = require("../controllers/logIn");
const { authentication } = require("../middlewares/authentication");

loginRoute.post("/login", logIn);
loginRoute.post("/loginnn" ,admin);


module.exports = loginRoute;