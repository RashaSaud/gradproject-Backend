const express = require("express");
const signUpRoute = express.Router();

const { newUser } = require("../controllers/signUp");

signUpRoute.post("/signUp", newUser);

module.exports = signUpRoute;
