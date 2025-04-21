const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentDataController = require("./controller/studentDataController")
const cors = require("cors");
const app = express();

app.use(express.json());

dotenv.config();


app.use(cors());

app.get("/",(req,res)=>{
    console.log("first")
    res.send("This is student data backend");
})


app.use("/student",studentDataController);



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(3000,()=>{
        console.log("server connected sucessfully");
    })
})
.catch((err)=>{
    console.log(err)
})



