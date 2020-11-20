import Breadcrumbs from './../components/Breadcrumbs';
import PageTitle from './../components/PageTitle';

const Product = (props) => {
    return (
        <main className="page-container">
            <Breadcrumbs category={"Product"}></Breadcrumbs>
            <PageTitle title={"Product"}></PageTitle>
        </main>
    )
};

export default Product;


