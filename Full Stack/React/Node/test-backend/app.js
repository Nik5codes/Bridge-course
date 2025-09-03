const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/products',(req,res)=>{
    res.json([{id:1,name:"laptop"}])
});

const {body} = require('express-validator');

const validateProduct = [
    body('name').isString().withMessage('Name is required'),
    body('price').isFloat({gt:0}).withMessage('Price > 0 is required')
];

app.post('/api/products',validateProduct,(req,res)=>{
    res.json(req.body);
});


module.exports=app;
app.listen(3000,()=>{
    console.log("server has started on port 3000");
})