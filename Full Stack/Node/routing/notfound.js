var express = require("express");
const notfound = express.Router();

notfound.use((req,res)=>{
    res.status(404).send("page not found")
});

module.exports = notfound;