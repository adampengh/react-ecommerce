import React, { useState } from 'react';
import Currency from '../modules/currency';
import QuickView from '../components/QuickView';

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
                {product.badge
                    ? <span>{product.badge}</span>
                    : <span>&nbsp;</span>
                }
            </div>

            <div className="product-card__details">
                <h4 className="product-card__title">{product.title}</h4>
                <div className="product-card__price">
                    {product.price.salePrice &&
                        <span className="product-card__price--discount">({Currency.percentDiscount(product.price.regPrice, product.price.salePrice)} off)</span>
                    }
                    {product.price.salePrice &&
                        <span className="product-card__price--sale fw-bold">{Currency.formatCurrency(product.price.salePrice)}</span>
                    }
                    <span className={`product-card__price--reg ${product.price.salePrice ? 'line-through' : 'fw-bold'}`}>{Currency.formatCurrency(product.price.regPrice)}</span>
                </div>
                <div className="product-card__promotions">
                    {product.promotion
                        ? <p>{product.promotion}</p>
                        : <p>&nbsp;</p>
                    }
                </div>
            </div>
            <div className="product-card__swatches">
                <ul>
                    {product.swatches && product.swatches.map((swatch, index) =>
                        <li className={`${index === 0 ? 'active' : ''}`}>
                            <span style={{ background: swatch }}></span>
                        </li>
                    )}
                </ul>
            </div>

            {showQuickview ? <QuickView show={showQuickview} product={product} closeQuickview={closeQuickview} /> : ''}
        </article>
    );
};

export default ProductCard;
