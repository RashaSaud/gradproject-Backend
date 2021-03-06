const express = require("express");
require('dotenv').config()
const app = express();

const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());




const signUpRoute = require("./routers/routes/signUpRoute");
const logInRoute  = require("./routers/routes/logInRoute");
const menuRoute = require("./routers/routes/menuRoute");
const cartRoute = require("./routers/routes/cartRoute");
const smsRoute = require("./routers/routes/smsRoute");

app.use(signUpRoute);
app.use(logInRoute);
app.use(menuRoute)
app.use(cartRoute)
app.use(smsRoute)





////////////////////////////

console.log(process.env.PORT) 

// const Port = 5000;
app.listen(process.env.PORT,()=>{
    console.log("server is running");
})
