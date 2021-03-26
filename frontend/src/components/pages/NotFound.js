import PageTitle from '../atoms/PageTitle';
import { Container, Row } from '../atoms/Grid';
import ProductRecommendations from '../organisms/ProductRecommendations';

const NotFound = () => {
    return (
        <main>
            <Container>
                <PageTitle title="Page Not Found" />

                <Row>
                    <ProductRecommendations
                        params={`_sort=salesRank&_order=asc`}
                        title="Best Sellers" />
                </Row>
            </Container>
        </main>
    )
}

export default NotFound;
