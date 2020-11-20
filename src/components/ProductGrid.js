import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = (props) => {
    const products = [...props.products, ...props.products, ...props.products, ...props.products, ...props.products, ...props.products, ...props.products, ...props.products];
    const [isLoaded, setIsLoaded] = useState(false);
    // const [products, setProducts] = useState([]);
    const [gridView, setGridView] = useState(4);


    useEffect(() => {
        // const prods = [];
        // for (let i = 0; i < 48; i++) {
        //     prods.push(products[i]);
        // }

        setIsLoaded(true);
        // setProducts(prods);
    }, [props.products]);


    if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="product-grid">
                <div className="product-grid__refinements">
                    <div className="product-grid__refinements-filters">Filters</div>
                    <div className="product-grid__refinements-sorting">Sort</div>
                    <div className="product-grid__refinements-visible">
                        <div className="button-group">
                            <span className="uppercase">Grid View:</span>
                            <button type="button" className={`${gridView === 2 ? 'active' : ''}`} onClick={() => setGridView(2)}>2</button>
                            <button type="button" className={`${gridView === 3 ? 'active' : ''}`} onClick={() => setGridView(3)}>3</button>
                            <button type="button" className={`${gridView === 4 ? 'active' : ''}`} onClick={() => setGridView(4)}>4</button>
                        </div>
                        <div className="button-group">
                            <span className="uppercase">Products:</span>
                            <button type="button">24</button>
                            <button type="button" className="active">48</button>
                            <button type="button">All</button>
                        </div>
                    </div>
                </div>
                <section className="product-grid__inner" data-grid-view={gridView}>
                    {products.map(product =>
                        <ProductCard product={product} key={product.id}></ProductCard>
                    )}
                </section>
            </div>
        );
    }
};

export default ProductGrid;
