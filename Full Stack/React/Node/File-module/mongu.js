var mongoose=require("mongoose");
const { resolve } = require("path");
let promise=new Promise ((resolve,reject)=>{
  mongoose.connect("mongodb://localhost:27017/user")
})
  promise.then(()=>{
        console.log("connection successful")
    })
    promise.catch(()=>{
       console.error("error")
    })
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    number:Number,
    email:String,
});

const User= mongoose.model('User',userSchema);
async function saveuser(){
const user=new User(
    {
        name:"jay",
        number:"12345",
        email:"jay@gmail"
    }
)
await user.save();
}

saveuser();