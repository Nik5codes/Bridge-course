var mongoose=require("mongoose")
var express=require("express")
require("dotenv").config();

const authRoutes = require("./routes/auth");

var app=express();
app.use(express.json());

app.use("/auth",authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/jwtdemo")
    .then(() => {
        console.log("DB connected");
    });

app.listen(3000,()=>{
    console.log("server running")
});