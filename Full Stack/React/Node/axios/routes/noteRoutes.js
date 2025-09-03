const express=require("express");
const router=express.Router();

const notes=[
    {id:1,title:"learn axios",content:"setup axios instance in react"},
    {id:2,title:"refactor Mern",content:"separate routes/controllers/models"}
];

router.get("/",(req,res)=>{
    res.json(notes);
});
module.exports=router;