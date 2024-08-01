const mongoose = require('mongoose');

const product = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    price: Number,
    stock: Number,
    imgURL: String
});


const Product = mongoose.model('Product', product);

module.exports = Product;