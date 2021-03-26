import React, { useState } from 'react';
import PriceGroup from './PriceGroup';
import Swatches from './Swatches';
import QuickView from './../organisms/QuickView';

const ProductCard = (props) => {
    const product = props.product;
    const [showQuickview, setShowQuickview] = useState(false);

    const closeQuickview = () => {
        setShowQuickview(false);
    }

    return(
        <article className="product-card" data-product-id={product.id}>
            <div className="product-card__image">
                <a href={`/product/${product.id}`}>
                    <span className="product-card__image--primary">
                        <img src={product.images[0].src} alt={product.title} />
                    </span>
                    {product.images[1].src &&
                        <span className="product-card__image--secondary">
                            <img src={product.images[1].src} alt={product.title} />
                        </span>
                    }
                    {product.image && product.image.badge &&
                        <div className="product-card__image-badge">
                            <span>{product.image.badge}</span>
                        </div>
                    }
                </a>
                <button className="product-card__quickview" data-quickview={product.id} onClick={() => setShowQuickview(true)}>Quickview</button>
            </div>

            <div className="product-card__badge">
                {product.badge ? <span>{product.badge}</span> : <span>&nbsp;</span>}
            </div>

            <div className="product-card__details">
                <h4 className="product-card__title">{product.title}</h4>
                <PriceGroup prefix={"product-card"} product={product} showDiscount />
                <div className="product-card__promotions">
                    {product.promotion ? <p>{product.promotion}</p> : <p>&nbsp;</p>}
                </div>
            </div>
            <Swatches prefix={"product-card"} swatches={product.swatches} />

            {showQuickview ? <QuickView show={showQuickview} product={product} closeQuickview={closeQuickview} /> : ''}
        </article>
    );
};

export default ProductCard;
