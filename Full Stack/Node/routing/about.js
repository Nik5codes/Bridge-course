var express = require('express');
const about=express.Router();
const contact = require('./contactus.js')

about.get("/",(req,res)=>{
    res.send("this is about us page")
});

about.use("/contact",contact)

module.exports = about;