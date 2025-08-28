var express = require('express');
const contact=express.Router();

contact .get("/",(req,res)=>{
    res.send("this is about contact us")
});


module.exports = contact;