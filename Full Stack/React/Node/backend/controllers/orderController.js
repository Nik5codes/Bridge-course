const Order = require('../models/Order.js');

const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ message: "Order saved", order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Data not saved" });
    }
    
};

module.exports = { createOrder };