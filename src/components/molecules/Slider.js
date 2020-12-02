import React from 'react';
import Slider from 'react-slick';

import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';

const ButtonPrev = ({ currentSlide, slideCount, ...props }) => {
    return(
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
    return(
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

export default class SlickSlider extends React.Component {
    render() {
        const settings = {
            arrows: this.props.arrows || true,
            autoplay: this.props.autoplay || false,
            autoplaySpeed: this.props.autoplaySpeed || 3000,
            asNavFor: this.props.asNavFor || '',
            dots: this.props.dots || false,
            dotsClass: this.props.dotsClass || 'slick-dots',
            infinite: this.props.infinite || true,
            nextArrow: this.props.nextArrow || <ButtonNext />,
            prevArrow: this.props.prevArrow || <ButtonPrev />,
            speed: this.props.speed || 500,
            slidesToShow: this.props.slidesToShow || 1,
            slidesToScroll: this.props.slidesToScroll || 1,
        };

        return (
            <div className={`${this.props.className}` ? this.props.className : ''}>
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>
        )
    }
}
