import React from 'react';

import Button, { ButtonGroup } from './../atoms/Button';
import ProductCard from './../molecules/ProductCard';
import {ReactComponent as ArrowDownIcon} from './../../assets/icons/arrow-down.svg';


export default class ProductGrid extends React.Component {
    constructor(props) {
        super(props);
        this.setGridView = this.setGridView.bind(this);
        this.handleFiltersVisibility = this.handleFiltersVisibility.bind(this);
        this.handleSortOrder = this.handleSortOrder.bind(this);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.sortSalesRank = this.sortSalesRank.bind(this);

        this.state = {
            isLoaded: false,
            gridView: 4,
            showSortDropdown: false,
            showFilters: false,
            sortOrder: 'Best Selling',
            products: props.products
        }
    }

    componentDidMount() {
        this.setState({
            products: this.sortSalesRank(this.state.products, 'ascending'),
            isLoaded: true,
        });
    }

    setGridView(value) {
        this.setState({
            gridView: value
        });
    }

    handleVisibility() {
        this.setState({
            showSortDropdown: !this.state.showSortDropdown
        });
    }

    handleFiltersVisibility() {
        this.setState({
            showFilters: !this.state.showFilters,
            gridView: this.state.showFilters ? 4 : 3
        });
    }

    sortByPrice(products, direction) {
        products.sort((a, b) => {
            a = a.price.salePrice || a.price.regPrice;
            b = b.price.salePrice || b.price.regPrice;
            return (direction === 'ascending') ? a - b : b - a;
        });
        return products;
    }

    sortNewest(products) {
        products.sort((a, b) => {
            a = new Date(a.published_at || a.created_at);
            b = new Date(b.published_at || b.created_at);
            return a - b;
        });
        return products;
    }

    sortSalesRank(products, direction) {
        products.sort((a, b) => {
            a = a.salesRank;
            b = b.salesRank;
            return (direction === 'ascending') ? a - b : b - a;
        });
        return products;
    }

    handleSortOrder(label) {
        let products = this.state.products;

        switch(label) {
            case 'Best Selling':
                this.setState({
                    products: this.sortSalesRank(products, 'ascending')
                })
                break;
            case 'Newest':
                this.setState({
                    products: this.sortNewest(products)
                })
                break;
            case 'Price - Low to High':
                this.setState({
                    products: this.sortByPrice(products, 'ascending')
                })
                break;
            case 'Price - High to Low':
                this.setState({
                    products: this.sortByPrice(products, 'descending')
                })
                break;
            default:
                break;
        }

        this.setState({
            sortOrder: label,
            showSortDropdown: false
        });
    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="product-grid">
                    <div className="product-grid__refinements">
                        <div className={`product-grid__refinements-filters ${this.state.showFilters ? 'show' : ''}`}>
                            <div className={`dropdown ${this.state.showFilters ? 'show' : ''}`}>
                                <div className="dropdown__label" onClick={this.handleFiltersVisibility}>
                                    {this.state.showFilters ? 'Hide' : 'Show'} Filters
                                    <span className="dropdown__icon">
                                        <ArrowDownIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="product-grid__refinements-sorting">
                        <div className={`dropdown ${this.state.showSortDropdown ? 'show' : ''}`}>
                            <div className="dropdown__label" onClick={this.handleVisibility}>
                                Sort By: {this.state.sortOrder}
                                <span className="dropdown__icon">
                                    <ArrowDownIcon />
                                </span>
                            </div>
                            <div className="dropdown__items">
                                <span className="dropdown__item" onClick={() => this.handleSortOrder('Newest')}>Newest</span>
                                <span className="dropdown__item" onClick={() => this.handleSortOrder('Best Selling')}>Best Selling</span>
                                <span className="dropdown__item" onClick={() => this.handleSortOrder('Price - High to Low')}>Price: High to Low</span>
                                <span className="dropdown__item" onClick={() => this.handleSortOrder('Price - Low to High')}>Price: Low to High</span>
                            </div>
                        </div>
                        </div>
                        <div className="product-grid__refinements-visible">
                            <ButtonGroup>
                                <span className="uppercase">Grid View:</span>
                                <Button buttonClass={`${this.state.gridView === 2 ? 'active' : ''}`} onClick={() => this.setGridView(2)}>2</Button>
                                <Button buttonClass={`${this.state.gridView === 3 ? 'active' : ''}`} onClick={() => this.setGridView(3)}>3</Button>
                                <Button buttonClass={`${this.state.gridView === 4 ? 'active' : ''}`} onClick={() => this.setGridView(4)}>4</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <span className="uppercase">Products:</span>
                                <Button>24</Button>
                                <Button buttonClass="active">48</Button>
                                <Button>All</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <section className="product-grid__inner" data-show-filters={this.state.showFilters}>
                        <div className="product-grid__aside">Filters</div>
                        <div className="product-grid__main" data-grid-view={this.state.gridView}>{this.state.products.map(product =>
                            <ProductCard product={product} key={product.id}></ProductCard>
                        )}</div>
                    </section>
                </div>
            );
        }
    }
};

