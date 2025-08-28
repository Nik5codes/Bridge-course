const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const products = [
    { id:1, name: 'Laptop', price:899 },
    { id:2, name: 'phone', price:599 }
]

app.get('/api/products',(req,res) => {
    res.json(products);
});

app.listen(3000,()=>{
    console.log('server is running');
})