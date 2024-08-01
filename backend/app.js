const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
mongoose.connect("mongodb+srv://nikul42:nikul42@cluster0.dwlyv0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const product = require('./productController');


app.use(express.json());                                                        

const Cors ={
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(Cors));

app.post('/product', product.createProduct);
app.get('/product', product.getProducts);
app.get('/product/:id', product.getProduct);
app.delete('/product/:id', product.deleteProduct);
app.put('/product/:id', product.updateProduct);



app.listen(4000, () => {
    console.log('Server is running on port 4000');
    }
);