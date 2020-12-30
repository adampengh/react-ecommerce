import React from 'react';

// Atoms
import Button from '../atoms/Button';

// Molecules
import PriceGroup from '../molecules/PriceGroup';
import RatingsStars from '../molecules/RatingsStars';
import Swatches from '../molecules/Swatches';

// Organisms
import ProductDetailSlider from '../organisms/ProductDetailSlider';
import ProductDetailGrid from '../organisms/ProductDetailGrid';
import ProductRecommendations from '../organisms/ProductRecommendations';

export default class ProductPrimary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.cart,
            product: this.props.product
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart() {
        console.log('ADD TO CART', this.state.product);
        console.log('Cart', this.state.cart)
        // this.setState({
        //     cart: this.state.cart.push(this.state.product)
        // });
    }

    render() {
        const prefix = this.props.prefix || 'product-primary';
        const product = this.props.product;
        const productGallery = this.props.productGallery || 'slider';

        const ProductGallery = () => {
            if (productGallery === 'grid') {
                return <ProductDetailGrid prefix={prefix} product={product} />
            }
            return <ProductDetailSlider prefix={prefix} product={product} />
        }

        return (
            <div className={prefix}>
                <div className={`${prefix}__top`}>
                    <div className={`${prefix}__top-left`}>
                        <ProductGallery />
                    </div>

                    <div className={`${prefix}__top-right`}>
                        <div className={`${prefix}__heading`}>
                            <h1 className={`${prefix}__title`}>{product.title}</h1>
                            <p className={`${prefix}__item-no`}>Item {product.id}</p>
                        </div>

                        {/* Ratings */}
                        {product.reviews.ratings &&
                            <RatingsStars prefix={prefix} reviews={product.reviews} />
                        }

                        <PriceGroup
                            className="product-primary"
                            product={product}
                            showDiscount />
                        {product.promotion && <p className={`${prefix}__promotion`}>{product.promotion}</p>}

                        <Swatches swatches={product.swatches} />

                        <div className="product-primary__actions">
                            <Button buttonClass="default" onClick={this.handleAddToCart}>Add to Cart</Button>
                            <Button buttonClass="default--outline">Add to Wishlist</Button>
                        </div>
                    </div>
                </div>

                <div className={`${prefix}__bottom`}>
                    <ProductRecommendations
                        params={`_sort=id&_order=asc&id_ne=${product.id}`}
                        title={"You May Also Like"} />
                    <ProductRecommendations
                        params={`_sort=reviews.averageRating&_order=desc&id_ne=${product.id}`}
                        title={"Top Rated"} />
                    <ProductRecommendations
                        params={`_sort=salesRank&_order=asc&id_ne=${product.id}`}
                        title={"Best Sellers"} />
                </div>
            </div>
        )
    }
}
