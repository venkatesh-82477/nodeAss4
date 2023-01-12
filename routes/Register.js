const express=require("express");

const registerController=require("../controllers/Register")
const regi =express.Router();

regi.get("/register",registerController.userRegisterController)

module.exports=regi;