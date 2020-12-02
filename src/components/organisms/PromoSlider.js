import SlickSlider from '../molecules/Slider';

const PromoSlider = (props) => {
    return (
        <div className="promo-slider">
            <SlickSlider
                autoplay
                className={"promo-slider__inner"}
            >
                <div>
                    <p>Free Shipping on All Order $50+</p>
                </div>
                <div>
                    <p>Slide 2: Extra 60% off sale styles. Online Only. Use Code GOBIGGER.</p>
                </div>
                <div>
                    <p>Slide 3: Extra 60% off sale styles. Online Only. Use Code GOBIGGER.</p>
                </div>
                <div>
                    <p>Slide 4: Extra 60% off sale styles. Online Only. Use Code GOBIGGER.</p>
                </div>
            </SlickSlider>
        </div>
    )
};

export default PromoSlider;
