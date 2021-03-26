import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Molecules
import Breadcrumbs from '../molecules/Breadcrumbs';

// Template
import ProductPrimary from '../templates/ProductPrimary';


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
        axios.get(`http://localhost:5000/products/${productId}`)
            .then(response => {
                    if (!response.data.length) {
                        setNotFound(true);
                        setIsLoaded(true);
                    } else {
                        setProduct(response.data[0]);
                        setIsLoaded(true);
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setError(error);
                    setIsLoaded(true);
                }
            )
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


