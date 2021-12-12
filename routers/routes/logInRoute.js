const express = require("express");
const loginRoute = express.Router();

const { logIn } = require("../controllers/logIn");

loginRoute.post("/login", logIn);

module.exports = loginRoute;