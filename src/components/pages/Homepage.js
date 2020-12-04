
// Molecules
import Hero from '../molecules/Hero';

// Organisms
import ProductRecommendations from '../organisms/ProductRecommendations';

const Homepage = () => {
    return (
        <main>
            <Hero />
            <div className="container">
                <ProductRecommendations
                    params={`_sort=salesRank&_order=asc`}
                    title="Best Sellers" />
            </div>
        </main>
    )
};

export default Homepage;


