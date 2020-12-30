import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

// Atoms
import Button from './../atoms/Button';

// Molecules
import PriceGroup from './../molecules/PriceGroup';
import Swatches from './../molecules/Swatches';

// Organisms
import ProductDetailsSlider from './../organisms/ProductDetailSlider';

const QuickView = (props) => {
    const show = props.show;
    const product = props.product;
    const closeQuickview = props.closeQuickview;

    return (
        <div>
            {show &&
                <div className="quickview">
                    <div className="quickview__content">
                        <button className="quickview__close-btn" onClick={()=> closeQuickview()}><CloseIcon /></button>
                        <div className="quickview__header">
                            <h3>{product.title}</h3>
                            <a href={`/product/${product.id}`}>View Details</a>
                        </div>
                        <div className="quickview__main">
                            <div className="quickview__main-left">
                                <ProductDetailsSlider product={product} prefix={"quickview"} />
                                {/* <img src={product.images[0].src} alt={product.title} /> */}
                            </div>
                            <div className="quickview__main-right">
                                <span className="quickview__promotion uppercase">{product.promotion}</span>
                                <p className="quickview__brand uppercase">{product.brand}</p>
                                <h3 className="quickview__title">{product.title}</h3>
                                <PriceGroup prefix={"quickview"} product={product} />
                                <Swatches prefix={"quickview"} swatches={product.swatches} />
                                <div className="quickview__actions">
                                    <Button buttonClass="default">Add to Cart</Button>
                                    <Button buttonClass="default--outline">Add to Wishlist</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default QuickView;
