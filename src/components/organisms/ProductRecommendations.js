import React from 'react';

// Molecules
import PriceGroup from '../molecules/PriceGroup';
import SlickSlider from '../molecules/Slider';


export default class ProductRecommendations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const url = `http://localhost:4000/products/${this.props.params ? `?${this.props.params}` : ''}`;
        fetch(url)
            .then(response => response.json())
            .then(products => this.setState({
                products: products
            }))
    }

    render() {
        const settings = {
            autoplay: false,
            initialSlide: 0,
            slidesToScroll: 1,
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        }

        const prefix = this.props.prefix || 'product-recommendations';

        return (
            <div className={`${prefix}`}>
                <h2 className={`${prefix}__title`}>{this.props.title}</h2>
                <SlickSlider {...settings}>
                    {this.state.products.map((product, index) =>
                        <div className={`${prefix}__slide`} data-product-id={`${product.id}`} key={index}>
                            <a className={`${prefix}__slide-image`} href={`/product/${product.id}`} key={index}>
                                <img src={product.images[0].src} alt={product.title} />
                            </a>
                            <div className={`${prefix}__slide-details`}>
                                <h4 className={`${prefix}__slide-title`}>{product.title}</h4>
                                <PriceGroup product={product} />
                            </div>
                        </div>
                    )}
                </SlickSlider>
            </div>
        )
    }
}
