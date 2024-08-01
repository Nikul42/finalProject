const productModel = require('./product');

async function createProduct(req, res) {
    const product = new productModel({
        id: req.body.id,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        imgURL: req.body.imgURL
    });
    try {
        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getProducts(req, res) {
    try {
        let product = await productModel.find();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getProduct(req, res) {
    try {
        let product = await productModel.find({id: req.params.id});
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function deleteProduct(req, res) {
    try {
        await productModel.deleteOne({id: req.params.id});
        res.sendStatus(400);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

async function updateProduct(req, res) {
    try {
        await productModel.updateOne({id: req.params.id}, req.body);
        res.sendStatus(400);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
};