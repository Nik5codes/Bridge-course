const express = require ('express');
const app = express();

app.use((req,res,next)=>{
    console.log("this is one middleware");
    next();
})

app.use((req,res,next)=>{
    req.startTime = Date.now();
    next();
})

app.get('/',(req,res)=>{
    res.send(`request started at ${req.startTime}`)
})