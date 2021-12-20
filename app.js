const express = require("express");
const app = express();

const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const signUpRoute = require("./routers/routes/signUpRoute");
const logInRoute  = require("./routers/routes/logInRoute");
const menuRoute = require("./routers/routes/menuRoute")
app.use(signUpRoute);
app.use(logInRoute);
app.use(menuRoute)

////////////////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running");
})
