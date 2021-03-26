const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

// ================================================
// Add Product
// ================================================
router.route('/add').post((req, res) => {

    const product = {
        id: req.body.id,
        sku: req.body.sku,
        brand: req.body.brand,
        title: req.body.title,
        images: req.body.images,
        price: req.body.price,
        badge: req.body.badge,
        reviews: req.body.review,
        createdAt: Date.parse(req.body.createdAt),
        publishedAt: Date.parse(req.body.publishedAt)
    }

    const newProduct = new Product(product);

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// ================================================
// Get Product By Product ID
// ================================================
router.route('/:id').get((req, res) => {
    Product.find({ id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});


// ================================================
// Update Product
// ================================================
router.route('/update/:id').post((req, res) => {
    Product.find({ id: req.params.id })
        .then(product => {
            product.id = req.body.id;
            product.sku = req.body.sku;
            product.brand = req.body.brand;

            product.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


// ================================================
// Delete Product
// ================================================
router.route('/:id').delete((req, res) => {
    Product.find({ id: req.params.id })
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
