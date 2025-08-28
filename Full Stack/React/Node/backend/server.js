var mongoose=require("mongoose")
var express=require("express")
var app=express();

app.use(express.json());

const productRoutes = require('./routes/productroutes');
app.use('/', productRoutes);

mongoose.connect("mongodb://localhost:27017/user")
.then(()=>{
    console.log("succes")
})
.catch(()=>{
    console.error("error")
})

app.listen(3000,()=>{
    console.log("server running")
})