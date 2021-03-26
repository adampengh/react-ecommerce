const ProductDetailGrid = (props) => {
    const prefix = props.prefix;
    const product = props.product;

    return(
        <div className={`${prefix}__image-grid`}>
            {product.images.map((image) =>
                <span>
                    <img src={image.src} alt={product.title} />
                </span>
            )}
        </div>
    )
}

export default ProductDetailGrid
