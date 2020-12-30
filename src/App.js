import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import './scss/styles.scss';

// Pages
import Account from './components/pages/account/Account';
import Cart from './components/pages/Cart';
import Collection from './components/pages/Collection';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/account/Login';
import NotFound from './components/pages/NotFound';
import Product from './components/pages/Product';
import Stores from './components/pages/Stores';

import Layout from './components/pages/Layout';
import Styleguide from './components/pages/Styleguide';

import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import PromoSlider from './components/organisms/PromoSlider';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            loggedIn: false
        }
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <Header prefix='header' loggedIn={this.state.loggedIn} cart={this.state.cart} />
                    <PromoSlider />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/collections/:topLevel/:category" component={Collection} />
                        <Route path="/collections/:topLevel" component={Collection} />
                        <Route path="/product/:productId" component={Product} />
                        <Route path="/cart" component={Cart} />
                        <Route exact path="/account" component={Account} />
                        <Route path="/account/login" component={Login} />
                        <Route path="/stores" component={Stores} />
                        <Route path="/layout" component={Layout} />
                        <Route path="/styleguide" component={Styleguide} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
