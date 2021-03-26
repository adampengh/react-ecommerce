const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__image">
                <picture>
                    <source media="(max-width:767px)" srcSet="/assets/img/placeholder-image-4x3.jpg" />
                    <source media="(min-width:768px)" srcSet="/assets/img/placeholder-image-16x9.jpg" />
                    <img src="/assets/img/placeholder-image-16x9.jpg" alt="" />
                </picture>
            </div>

            <div className="hero__text">
                <h3>Hero Text</h3>
            </div>
        </section>
    )
}

export default Hero;
