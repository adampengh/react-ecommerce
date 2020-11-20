const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__image">
                <picture>
                    <source media="(max-width:767px)" srcset="https://via.placeholder.com/800x600" />
                    <source media="(min-width:768px)" srcset="https://via.placeholder.com/1600x800" />
                    <img src="https://via.placeholder.com/1600x800" alt="" />
                </picture>
            </div>

            <div className="hero__text">
                <h3>Hero Text</h3>
            </div>
        </section>
    )
}

export default Hero;
