const express = require("express")
const [studentModel,name] = require("../models/studentModel");

const studentRouter = express.Router();

studentRouter.get("/",async(req,res)=>{
    try {
        const studentData = await studentModel.find();
        return res.status(200).send({message:"students fetched sucessfully",students:studentData});
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }
})

studentRouter.post("/",async(req,res)=>{
    try {
        const {name,grade,email} = req.body;
        if(!name || !grade || !email){
            return res.status(400).send({message:"please provide all details"});
        }

        await studentModel({
            name,grade,email
        }).save();

        return res.status(201).send({message:"student created sucessfully"});
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"something went wrong"});
    }
})




module.exports = studentRouter;
