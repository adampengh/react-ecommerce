import { useState, useEffect } from 'react';
import axios from 'axios';

import PageTitle from '../atoms/PageTitle';

const Stores = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [locations, setLocations] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        axios.get('http://localhost:5000/locations')
            .then(response => {
                    setLocations(response.data);
                    setLoaded(true);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setError(error);
                    setLoaded(true);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!loaded) {
        return <div>Loading...</div>
    } else {
        return(
            <main className="container">
                <PageTitle title="Stores" />
                {locations.map((state, index) =>
                    <div key={index}>
                        <h1 key={index}>{state.state}</h1>
                        {state.stores.map((store, index) =>
                            <div key={index}>
                                <h3 style={{marginBottom: '4px'}}>{store.address}</h3>
                                {store.address2 && <p>{store.address2}</p>}
                                <p>
                                    {store.city && <span>{store.city}</span>}
                                    {store.zip && <span>, {store.zip}</span>}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </main>
        )
    }
}

export default Stores;
