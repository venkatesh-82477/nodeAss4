const express=require("express");
const loginController=require("../controllers/Login")
const router =express.Router();

router.post("/login",loginController.userLoginController)

module.exports=router;