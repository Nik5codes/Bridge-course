var mongoose = require('mongoose')
const orderSchema = new mongoose.Schema(
    {
        name:String,
        desc:String,
        email:String
    }
)

const order = mongoose.model('order',orderSchema)
// const order = new order(
//     {
            
//     }
// )

module.exports = order; 