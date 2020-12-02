import React, { useState } from 'react';

import {ReactComponent as ShoppingBagIcon} from '../../assets/icons/shopping-bag.svg';
import {ReactComponent as UserIcon} from '../../assets/icons/user.svg';
import {ReactComponent as LocationIcon} from '../../assets/icons/location.svg';

const Header = (props) => {
    const [menuVisible, setMenuVisible] = useState('false');

    const handleMenuClick = (event, menu) => {
        event.preventDefault();

        const megaMenu = event.target.nextElementSibling;
        if (megaMenu.classList.contains('show')) {
            setMenuVisible('menu');
        } else {
            setMenuVisible(menu);
        }

        const megaMenus = document.querySelectorAll('header__mega-menu');
        megaMenus.forEach(menu => {
            if (menu.classList.contains('show') && menu !== megaMenu) {
                setMenuVisible('');
            }
        });
    };

    return(
        <header className={props.prefix}>
            <div className={`${props.prefix}__inner`}>
                <a className={`${props.prefix}__logo`} href="/">Brand Name</a>

                <div className={`${props.prefix}__primary`}>
                    <nav className={`${props.prefix}__nav`}>
                        <ul className={`${props.prefix}__nav-list`}>
                            <li className={`${props.prefix}__nav-item`}>
                                <a href="/collections/new" data-menu="new">New</a>
                            </li>
                            <li className={`${props.prefix}__nav-item`}>
                                <a href="/collections/women" data-menu="women" onClick={(event) => handleMenuClick(event, 'women')}>Women</a>
                                <div className={`header__mega-menu ${menuVisible === 'women' ? 'show' : ''}`} data-menu="women">
                                    <div className="header__mega-menu-inner">
                                        <ul>
                                            <h3>Women</h3>
                                            <li><a href="/collections/women/new-arrivals">New Arrivals</a></li>
                                        </ul>
                                        <ul>
                                            <h3>Clothing</h3>
                                            <li><a href="/collections/women/all">All Clothing</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={`${props.prefix}__nav-item`}>
                                <a href="/collections/men" data-menu="men" onClick={(event) => handleMenuClick(event, 'men')}>Men</a>
                                <div className={`header__mega-menu ${menuVisible === 'men' ? 'show' : ''}`} data-menu="men">
                                    <div className="header__mega-menu-inner">
                                        <ul>
                                            <h3>Men</h3>
                                            <li><a href="/collections/men/new-arrivals">New Arrivals</a></li>
                                            <li><a href="/collections/men/best-sellers">Best Sellers</a></li>
                                            <li><a href="/collections/men/top-rated">Top Rated</a></li>
                                        </ul>
                                        <ul>
                                            <h3>Clothing</h3>
                                            <li><a href="/collections/men/all">All Clothing</a></li>
                                            <li><a href="/collections/men/shirts">Shirts</a></li>
                                            <li><a href="/collections/men/dress-shirts">Dress Shirts</a></li>
                                            <li><a href="/collections/men/pants-chinos">Pants & Chinos</a></li>
                                        </ul>
                                        <ul>
                                            <h3>Shoes</h3>
                                            <li><a href="/collections/men/shoes">All Shoes</a></li>
                                        </ul>
                                        <ul>
                                            <h3>Accessories</h3>
                                            <li><a href="/collections/men/all">All Clothing</a></li>
                                        </ul>
                                        <div className="header__mega-menu-promos">
                                            <h3>Summer Trends</h3>
                                            <div>
                                                <a href="/collections/men/shirts">
                                                    <img src="https://via.placeholder.com/300x400" alt="" />
                                                </a>
                                                <a href="/collections/men/shirts">
                                                    <img src="https://via.placeholder.com/300x400" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={`${props.prefix}__nav-item`}><a href="/collections/kids">Kids</a></li>
                            <li className={`${props.prefix}__nav-item`}><a href="/collections/brands">Brands</a></li>
                            <li className={`${props.prefix}__nav-item`}><a href="/collections/sale">Sale</a></li>
                            <li className={`${props.prefix}__nav-item`}><a href="/collections/factory">Factory</a></li>
                        </ul>
                    </nav>
                </div>

                <div className={`${props.prefix}__secondary`}>
                    <div className={`${props.prefix}__stores`}>
                        <LocationIcon/>
                        <span>Stores</span>
                    </div>
                    <div className={`${props.prefix}__account`}>
                        <UserIcon/>
                        <span>Sign In</span>
                    </div>
                    <div className={`${props.prefix}__cart`}>
                        <ShoppingBagIcon/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
