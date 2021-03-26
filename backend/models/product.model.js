const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: { type: String, required: true },
    sku: { type: String, required: true },
    brand: String,
    title: { type: String, required: true },
    images: [{
        src: String
    }],
    price: {
        regPrice: { type: Number, required: true },
        salePrice: Number
    },
    badge: String,
    reviews: {
        averageRating: Number,
        totalReviews: Number
    },
    createdAt: Date,
    publishAt: Date,
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
