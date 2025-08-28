var express = require('express')

const app = express();

const fs = require('fs')

var environ = require('dotenv').config();

const port = process.env.PORT ||5000

app.use(express.json());

app.get("/login", (req,res)=>{
    
    const {name,pwd}=req.body
    if(!name || !pwd){
        
        return res.json({error:"cant be blank"})
    }
    let submission = [];

    const newData = {name,pwd}

    submission.push(newData);

    const jsonData = JSON.stringify(newData, null,2);


    fs.readFile('login1.json','utf-8',(error,jsonData)=>{
        const obj = JSON.parse(jsonData)
        
        if(error){
            return res.json({"error":"Not Found"})
        }
    
       res.json(jsonData);
    })


})
app.listen(port,()=>{
        console.log("server is running")
    })
