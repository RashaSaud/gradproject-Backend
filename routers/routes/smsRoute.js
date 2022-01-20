const express = require("express");
const smsRoute = express.Router();

const { emailPost } = require("../controllers/sms");

smsRoute.post("/send-email", emailPost);

module.exports = smsRoute;
