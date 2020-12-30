
// Atoms
import Card from '../atoms/Card';
import { Container, Row } from '../atoms/Grid';

// Molecules
import Hero from '../molecules/Hero';

// Organisms
import ProductRecommendations from '../organisms/ProductRecommendations';

const HomepageTemplate = () => {
    return (
        <main className="main">
            <Container>
                <Row>
                    <Hero />
                </Row>

                <Row>
                    <Card
                        image="/assets/img/placeholder-image-2x3.jpg"
                        mobileImg="/assets/img/placeholder-image-3x2.jpg"
                        altText="Placeholder Image" />
                    <Card
                        image="/assets/img/placeholder-image-2x3.jpg"
                        mobileImg="/assets/img/placeholder-image-3x2.jpg"
                        altText="Placeholder Image" />
                    <Card
                        image="/assets/img/placeholder-image-2x3.jpg"
                        mobileImg="/assets/img/placeholder-image-3x2.jpg"
                        altText="Placeholder Image" />
                </Row>

                <Row>
                    <ProductRecommendations
                        params={`_sort=salesRank&_order=asc`}
                        title="Best Sellers" />
                </Row>
            </Container>
        </main>
    )
};

export default HomepageTemplate;
