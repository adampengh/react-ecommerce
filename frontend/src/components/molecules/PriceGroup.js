import Currency from '../../modules/currency';

const PriceGroup = (props) => {
    const className = props.className || '';
    const prefix = props.prefix || 'product';
    const product = props.product;

    return (
        <div className={`${className ? `${className}__price ` : ''}${prefix}__price`}>
            {props.showDiscount && product?.price?.salePrice &&
                <span className={`${prefix}__price--discount`}>({Currency.percentDiscount(product.price.regPrice, product.price.salePrice)} off)</span>
            }
            {product?.price?.salePrice &&
                <span className={`${prefix}__price--sale fw-bold`}>{Currency.formatCurrency(product.price.salePrice)}</span>
            }
            <span className={`${prefix}__price--reg ${product.price.salePrice ? 'line-through' : 'fw-bold'}`}>{Currency.formatCurrency(product.price.regPrice)}</span>
        </div>
    )
};

export default PriceGroup;
