import Breadcrumbs from './../components/Breadcrumbs';
import PageTitle from './../components/PageTitle';
import ProductGrid from './../components/ProductGrid';
const products = require('../data/products.json');

const Collection = (props) => {
    const topLevel = props.match.params.topLevel;
    const category = props.match.params.category;

    return (
        <main className="page-container">
            <Breadcrumbs topLevel={topLevel} category={category}></Breadcrumbs>
            <PageTitle title={category}></PageTitle>
            <ProductGrid products={products}></ProductGrid>
        </main>
    )
};

export default Collection;


