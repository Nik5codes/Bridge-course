var express = require('express');
const { createOrder } = require('../controllers/orderController');
const route = express.Router();

route.post("/saveOrder", createOrder);

module.exports = route;