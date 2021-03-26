import {useState, useEffect} from 'react';

// Atoms
import PageTitle from '../atoms/PageTitle';

// Molecules
import Breadcrumbs from '../molecules/Breadcrumbs';
import Modal from '../molecules/Modal';

// Organisms
import ProductGrid from '../organisms/ProductGrid';
const products = require('../../db.json').products;

const Collection = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [products, setProducts] = useState([]);

    const topLevel = props.match.params.topLevel;
    const category = props.match.params.category;

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        // fetch("http://localhost:4000/products")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             setProducts(result);
        //             setIsLoaded(true);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             setError(error);
        //             setIsLoaded(true);
        //         }
        //     )
        setIsLoaded(true);
        setError(false)
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <main className="page-container">
                <Breadcrumbs topLevel={topLevel} category={category}></Breadcrumbs>
                <PageTitle title={category}></PageTitle>
                <ProductGrid products={products}></ProductGrid>
                {/* <Modal></Modal> */}
            </main>
        )
    }
};

export default Collection;


