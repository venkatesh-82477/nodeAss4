const express = require("express");
const bodyParser = require("body-parser");
const loginRouter=require("./routes/Login")
const registerRouter = require("./routes/Register")
const CONSTANTS=require("./config/constants")

const app = express();

app.use(bodyParser.json());
app.use(loginRouter);
app.use(registerRouter);


app.listen(CONSTANTS.PORT,function(){
    console.log(`server is started at port ${CONSTANTS.PORT}`)
})