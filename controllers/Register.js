const jwt =require("jsonwebtoken")
const CONSTANTS=require("../config/constants")
  const userRegisterController = function(req,res){
        const rawToken = req.headers["authorization"]
        const token = rawToken.split(" ")[1];
        console.log("printing the token =>",token);
        const decoded = jwt.verify(token,CONSTANTS.SECRET_KEY)
        console.log("this is the decoded value =>",decoded);
        res.send(decoded)
}


module.exports={userRegisterController};