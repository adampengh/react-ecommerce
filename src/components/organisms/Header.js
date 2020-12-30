import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/shopping-bag.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainMenu: [],
            menuVisible: false,
            menuStatus: false
        }
    }

    componentDidMount() {
        if (!this.state.mainMenu.length) {
            fetch(`http://localhost:4000/mainMenu`)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        mainMenu: result
                    })
                });
        }
    }


    handleMenuClick = (event, menu) => {
        event.preventDefault();

        const megaMenu = event.target.nextElementSibling;
        if (megaMenu.classList.contains('show')) {
            this.setState({
                menuVisible: 'menu'
            });
        } else {
            this.setState({
                menuVisible: menu
            });
        }

        const megaMenus = document.querySelectorAll('header__mega-menu');
        megaMenus.forEach(menu => {
            if (menu.classList.contains('show') && menu !== megaMenu) {
                this.setState({
                    menuVisible: ''
                });
            }
        });
    };

    handleMenuStatus() {
        this.setState({
            menuStatus: !this.state.menuStatus
        });
    }

    render() {
        return (
            <header className={this.props.prefix}>
                <div className={`${this.props.prefix}__inner`}>
                    {/* Header - Logo */}
                    <a className={`${this.props.prefix}__logo`} href="/">Brand Name</a>

                    {/* Header - Primary */}
                    <div className={`${this.props.prefix}__primary`}>
                        <div className={`${this.props.prefix}__toggle`} data-menu-open={this.state.menuStatus} onClick={() => this.handleMenuStatus}>
                            <MenuIcon />
                        </div>
                        <nav className={`${this.props.prefix}__nav`} data-menu-open={this.state.menuStatus}>
                            <ul className={`${this.props.prefix}__nav-list`}>
                                {this.state.mainMenu.map((menuItem, index) =>
                                    <li className={`${this.props.prefix}__nav-item`} key={index}>
                                        <NavLink
                                            to={menuItem.link}
                                            data-menu={menuItem.category}
                                            onClick={menuItem.subMenu ? (event) => this.handleMenuClick(event, menuItem.category) : undefined}>
                                            {menuItem.category}
                                        </NavLink>
                                        {menuItem.subMenu &&
                                            <div className={`header__mega-menu ${this.state.menuVisible === menuItem.category ? 'show' : ''}`} data-menu={menuItem.category}>
                                                <div className="header__mega-menu-inner">
                                                    {menuItem.subMenu.menus.map((menu, index) =>
                                                        <ul key={index}>
                                                            <h3>{menu.category}</h3>
                                                            {menu.links.map((link, index) =>
                                                                <li key={index}><a href={link.link}>{link.category}</a></li>
                                                            )}
                                                        </ul>
                                                    )}
                                                    {menuItem.subMenu.promos &&
                                                        <div className="header__mega-menu-promos">
                                                            <h3>{menuItem.subMenu.promos.title}</h3>
                                                            <div>
                                                                {menuItem.subMenu.promos.images.map((image, index) =>
                                                                    <NavLink to={image.link} key={index}>
                                                                        <img src={image.image} alt="" />
                                                                    </NavLink>
                                                                )}
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>

                    {/* Header - Secondary */}
                    <div className={`${this.props.prefix}__secondary`}>
                        <a href="/stores" className={`${this.props.prefix}__stores`}>
                            <LocationIcon />
                            <span>Stores</span>
                        </a>
                        <div className={`${this.props.prefix}__account`}>
                            {this.props.loggedIn
                                ?
                                <a href="/account/logout">
                                    <UserIcon />
                                    <span>Sign Out</span>
                                </a>
                                :
                                <a href="/account/login">
                                    <UserIcon />
                                    <span>Sign In</span>
                                </a>
                            }
                        </div>
                        <div className={`${this.props.prefix}__cart`}>
                            <a href="/cart">
                                <ShoppingBagIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};
