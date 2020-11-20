import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';
import Currency from '../modules/currency';

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
                                <img src={product.images[0].src} alt={product.title} />
                            </div>
                            <div className="quickview__main-right">
                                <span className="quickview__promotion uppercase">{product.promotion}</span>
                                <p className="quickview__brand uppercase">{product.brand}</p>
                                <h3 className="quickview__title">{product.title}</h3>
                                <div className="quickview__price">
                                    {product.price.salePrice &&
                                        <span className="quickview__price--discount">({Currency.percentDiscount(product.price.regPrice, product.price.salePrice)} off)</span>
                                    }
                                    {product.price.salePrice &&
                                        <span className="quickview__price--sale fw-bold">{Currency.formatCurrency(product.price.salePrice)}</span>
                                    }
                                    <span className={`quickview__price--reg ${product.price.salePrice ? 'line-through' : 'fw-bold'}`}>{Currency.formatCurrency(product.price.regPrice)}</span>
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
