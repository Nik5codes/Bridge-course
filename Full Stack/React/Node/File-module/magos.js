var mongoose = require('mongoose');
let promise = new Promise((resolve, reject) => {
    mongoose.connect("mongodb://localhost:27017/product")
});
promise.then(console.log("succes"));
promise.catch(console.log("wrong"));

const productSchema = new mongoose.Schema({
    name:{type:String,
        required: true },
        price: Number,
        category: String,
        inStock: Boolean
    });

const Product = mongoose.model('product',productSchema);
module.exports = Product;

async function saveProduct() {
    const prod = new Product(
        {
            name:"nik",
            price: 240,
            category: "hehehe",
            inStock:true
        }
    )
    
}

saveProduct();