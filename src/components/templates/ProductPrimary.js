
// Atoms
import Button from '../atoms/Button';

// Molecules
import PriceGroup from '../molecules/PriceGroup';
import Swatches from '../molecules/Swatches';

// Organisms
import ProductDetailSlider from '../organisms/ProductDetailSlider';
import ProductDetailGrid from '../organisms/ProductDetailGrid'


const ProductPrimary = (props) => {
    const prefix = props.prefix || 'product-primary';
    const product = props.product;
    const productGallery = props.productGallery || 'slider';

    const ProductGallery = () => {
        if (productGallery === 'grid') {
            return <ProductDetailGrid prefix={prefix} product={product} />
        }

        return <ProductDetailSlider prefix={prefix} product={product} />
    }


    return (
        <div className={prefix}>
            <div className={`${prefix}__inner`}>
                <div className={`${prefix}__left`}>
                    <ProductGallery />
                </div>

                <div className={`${prefix}__right`}>
                    <div className={`${prefix}__heading`}>
                        <h1 className={`${prefix}__title`}>{product.title}</h1>
                        <p className={`${prefix}__item-no`}>Item {product.id}</p>
                    </div>
                    <PriceGroup
                        className="product-primary"
                        product={product}
                        showDiscount />
                    <Swatches
                        swatches={product.swatches} />

                    <div className="product-primary__actions">
                        <Button buttonClass="primary">Add to Cart</Button>
                        <Button buttonClass="primary-outline">Add to Wishlist</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPrimary;
