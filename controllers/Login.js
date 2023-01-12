const jwt =require("jsonwebtoken")
const CONSTANTS=require("../config/constants")
const userLoginController =function(req,res){
    console.log("user logged in");
    const loginData=req.body;
    if((loginData.username && loginData.password)){
        console.log("this is the login data =>",loginData);
        const jwtToken = jwt.sign(loginData,CONSTANTS.SECRET_KEY);
        res.status(200).send({"token":jwtToken})
    }
    else{
        res.status(400).send({message:"Invalid parameters in the body"})
    }
};

module.exports={userLoginController};