
// Molecules
import Hero from '../molecules/Hero';

// Organisms
import ProductRecommendations from '../organisms/ProductRecommendations';

const HomepageTemplate = () => {
    const style = 'col-1 col-sm-3';

    return (
        <main className="container">
            <Hero />
            <div className="row" style={{marginTop: '10px'}}>
                <div className={style}>
                    <picture>
                        <source media="(max-width:767px)" srcSet="/assets/img/placeholder-image-3x2.jpg" />
                        <source media="(min-width:768px)" srcSet="/assets/img/placeholder-image-2x3.jpg" />
                        <img src="/assets/img/placeholder-image-2x3.jpg" alt="" />
                    </picture>
                </div>
                <div className={style}>
                    <picture>
                        <source media="(max-width:767px)" srcSet="/assets/img/placeholder-image-3x2.jpg" />
                        <source media="(min-width:768px)" srcSet="/assets/img/placeholder-image-2x3.jpg" />
                        <img src="/assets/img/placeholder-image-2x3.jpg" alt="" />
                    </picture>
                </div>
                <div className={style}>
                    <picture>
                        <source media="(max-width:767px)" srcSet="/assets/img/placeholder-image-3x2.jpg" />
                        <source media="(min-width:768px)" srcSet="/assets/img/placeholder-image-2x3.jpg" />
                        <img src="/assets/img/placeholder-image-2x3.jpg" alt="" />
                    </picture>
                </div>
            </div>

            <ProductRecommendations
                params={`_sort=salesRank&_order=asc`}
                title="Best Sellers" />
        </main>
    )
};

export default HomepageTemplate;
