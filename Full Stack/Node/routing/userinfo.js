var express = require('express');
const userinfo=express.Router();

userinfo.get("/",(req,res)=>{
    res.send("reading all user info")
})

userinfo.get("/:id",(req,res)=>{
    res.send(`reading user with id ${req.params.id}`)
})

module.exports = userinfo;