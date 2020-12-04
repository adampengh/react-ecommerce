import React from 'react';
import Slider from 'react-slick';

import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';

export default class ProductSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        }
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        })
    }

    render() {
        const ButtonPrev = ({ currentSlide, slideCount, ...props }) => {
            return (
                <button
                    {...props}
                    className={
                        'slick-prev slick-arrow' +
                        (currentSlide === 0 ? ' slick-disabled' : '')
                    }
                    aria-hidden='true'
                    aria-disabled={currentSlide === 0 ? true : false}
                >
                    <ArrowLeftIcon />
                </button>
            )
        };

        const ButtonNext = ({ currentSlide, slideCount, ...props }) => {
            return (
                <button
                    {...props}
                    className={
                        'slick-next slick-arrow' +
                        (currentSlide === 0 ? ' slick-disabled' : '')
                    }
                    aria-hidden='true'
                    aria-disabled={currentSlide === 0 ? true : false}
                >
                    <ArrowRightIcon />
                </button>
            )
        };


        if (this.props.product.images.length < 6) {
            const settings = {
                autoplay: false,
                initialSlide: 0,
                nextArrow: <ButtonNext />,
                prevArrow: <ButtonPrev />,
                slidesToShow: 1,
            }
            return (
                <Slider
                    {...settings}
                    className={`${this.props.prefix}__image-slider`}
                >
                    {this.props.product.images.map((image, index) =>
                        <span key={index}>
                            <img src={image.src} alt={this.props.product.title} />
                        </span>
                    )}
                </Slider>
            )
        } else {
            const mainSliderSettings = {
                autoplay: false,
                nextArrow: <ButtonNext />,
                prevArrow: <ButtonPrev />,
                slidesToShow: 1,
            }

            const thumbSliderSettings = {
                autoplay: false,
                nextArrow: <ButtonNext />,
                prevArrow: <ButtonPrev />,
                slidesToShow: 6,
                swipeToSlide: true,
                focusOnSelect: true
            }
            return (
                <div>
                    <Slider
                        {...mainSliderSettings}
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        className={`${this.props.prefix}__image-slider`}
                    >
                        {this.props.product.images.map((image, index) =>
                            <span key={index}>
                                <img src={image.src} alt={this.props.product.title} />
                            </span>
                        )}
                    </Slider>
                    <Slider
                        {...thumbSliderSettings}
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        className={`${this.props.prefix}__image-thumbnails`}
                    >
                        {this.props.product.images.map((image, index) =>
                            <span key={index}>
                                <img src={image.src} alt={this.props.product.title} />
                            </span>
                        )}
                    </Slider>
                </div>
            )
        }
    }
}
