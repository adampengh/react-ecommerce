import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import './scss/styles.scss';

// Pages
import Homepage from './pages/Homepage';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Layout from './pages/Layout';

import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import PromoSlider from './components/organisms/PromoSlider';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header prefix='header' />
                    <PromoSlider />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/collections/:topLevel/:category" component={Collection} />
                        <Route path="/collections/:topLevel" component={Collection} />
                        <Route path="/product/:productId" component={Product} />
                        <Route path="/layout" component={Layout} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
