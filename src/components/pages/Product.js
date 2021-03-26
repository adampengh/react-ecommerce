import React, { useState, useEffect } from 'react';

// Molecules
import Breadcrumbs from '../molecules/Breadcrumbs';

// Template
import ProductPrimary from '../templates/ProductPrimary';

const products = require('../../db.json').products;

const Product = (props) => {
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);

    const productId = props.match.params.productId;

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        // fetch(`http://localhost:4000/products/${productId}`)
        //     .then(res => {
        //         if (res.status === 200) {
        //             return res.json()
        //         } else {
        //             setNotFound(true);
        //             setIsLoaded(false);
        //         }
        //     })
        //     .then(
        //         (result) => {
        //             setProduct(result);
        //             setIsLoaded(true);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             setError(error);
        //             setIsLoaded(true);
        //         }
        //     )
        const product = products.find(product => String(product.id) === String(productId));
        if (!product) {
            setNotFound(true);
            setIsLoaded(true);
        } else {
            setProduct(product);
            setIsLoaded(true);
            setError(false);
        }
    }, [productId]);

    if (notFound) {
        return (
            <div>
                <div className="container">
                    <h1>Product Not Found</h1>
                </div>
            </div>
        )
    } else if (error) {
        return (
            <div>Error: {error.message}</div>
        )
    } else if (!isLoaded) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div>
                <div className="container">
                    <Breadcrumbs category={"Product"} />
                </div>
                <ProductPrimary product={product} productGallery="slider"></ProductPrimary>
            </div>
        )
    }
};

export default Product;


