import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { cartLength, wishlistLength } from '../features/AppSlice'

export const Header = () => {
    const productCartLength = useSelector(cartLength)
    const productWishlistLength = useSelector(wishlistLength)

    return (
        <>
            <div className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-wrapper d-none d-lg-flex">
                                <div className="logo">
                                    <NavLink to="/">
                                        <img src="http://brigmebel.by/img/newframework1609-logo-1467358387.jpg" className="img-fluid logo-title-f" alt="" />
                                    </NavLink>
                                </div>
                                <div className="navigation-menu-wrapper">
                                    <nav>
                                        <ul>
                                            <li><NavLink to="/">ГЛАВНАЯ</NavLink></li>
                                            <li className="menu-item-has-children"><NavLink to="/catalog">КАТАЛОГ</NavLink>
                                                <ul className="sub-menu">
                                                    <li><NavLink to='/category'>
                                                        Наборы мебели для дошкольных учреждений
                                                    </NavLink></li>
                                                    <li><NavLink to="/catalog">Кровати</NavLink></li>
                                                    <li><NavLink to="/catalog">Тумбы</NavLink></li>
                                                    <li><NavLink to="/catalog">Игровая мебель</NavLink></li>
                                                    <li><NavLink to="/catalog">Стулья и столы</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/about">О НАС</NavLink></li>
                                            <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-icon-wrapper">
                                    <ul className="icon-list">
                                        <li>
                                            <div className="header-cart-icon">
                                                <NavLink to="/wishlist" id="minicart-trigger">
                                                    <i className="ion-heart"></i>
                                                    <span className="counter">{productWishlistLength}</span>
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="header-cart-icon">
                                                <NavLink to="/cart" id="minicart-trigger">
                                                    <i className="ion-bag"></i>
                                                    <span className="counter">{productCartLength}</span>
                                                </NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="header-cart-icon">
                                                <NavLink to="/register" id="minicart-trigger">
                                                    <i className='ion-person'></i>
                                                </NavLink>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="header-mobile-navigation d-block d-lg-none">
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6">
                                        <div className="header-logo">
                                            <NavLink to="/">
                                                <img src="http://brigmebel.by/img/newframework1609-logo-1467358387.jpg" className="img-fluid logo-title-f" alt="" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <div className="mobile-navigation text-right">
                                            <div className="header-icon-wrapper">
                                                <ul className="icon-list justify-content-end">
                                                    <li>
                                                        <div className="header-cart-icon">
                                                            <NavLink to="/cart">
                                                                <i className="ion-bag"></i>
                                                                <span className="counter">{productCartLength}</span>
                                                            </NavLink>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)" className="mobile-menu-icon" id="mobile-menu-trigger"><i className="fa fa-bars"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
                <a href="javascript:void(0)" className="offcanvas-menu-close" id="offcanvas-menu-close-trigger">
                    <i className="ion-android-close"></i>
                </a>

                <div className="offcanvas-wrapper">

                    <div className="offcanvas-inner-content">
                        <div className="offcanvas-mobile-search-area">
                            <form action="index.html#">
                                <input type="search" placeholder="Search ..." />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        <nav className="offcanvas-navigation">
                            <ul>
                                <li className="menu-item-has-children"><a href="index.html#">Home</a>
                                    <ul className="sub-menu">
                                        <li><a href="index.html">Home 01</a></li>
                                        <li><a href="index-2.html">Home 02</a></li>
                                        <li><a href="index-3.html">Home 03</a></li>
                                        <li><a href="index-4.html">Home 04</a></li>
                                        <li><a href="index-5.html">Home 05</a></li>
                                        <li><a href="index-6.html">Home 06</a></li>
                                        <li><a href="index-7.html">Home 07</a></li>
                                        <li><a href="index-8.html">Home 08</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="index.html#">Pages</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children"><a href="index.html#">Page List One</a>
                                            <ul className="sub-menu">
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="index.html#">Page List Two</a>
                                            <ul className="sub-menu">
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="login-register.html">Login Register</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="index.html#">Page List Three</a>
                                            <ul className="sub-menu">
                                                <li><a href="compare.html">Compare</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="about.html">About Us</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="index.html#">Shop</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children"><a href="index.html#">Shop Grid</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-3-column.html">shop 3 column</a></li>
                                                <li><a href="shop-4-column.html">shop 4 column</a></li>
                                                <li><a href="shop-left-sidebar.html">shop left sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="index.html#">Shop List</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop-list.html">shop List</a></li>
                                                <li><a href="shop-list-left-sidebar.html">shop List Left Sidebar</a></li>
                                                <li><a href="shop-list-right-sidebar.html">shop List Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="index.html#">Single Product One</a>
                                            <ul className="sub-menu">
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="single-product-variable.html">Single Product variable</a></li>
                                                <li><a href="single-product-affiliate.html">Single Product affiliate</a></li>
                                                <li><a href="single-product-group.html">Single Product group</a></li>
                                                <li><a href="single-product-tabstyle-2.html">Tab Style 2</a></li>
                                                <li><a href="single-product-tabstyle-3.html">Tab Style 3</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="index.html#">Single Product Two</a>
                                            <ul className="sub-menu">
                                                <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                                <li><a href="single-product-gallery-right.html">Gallery Right</a></li>
                                                <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                                <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                                <li><a href="single-product-slider-box.html">Slider Box</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="index.html#">Blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                        <li><a href="blog-post-left-sidebar.html">Blog Post Left Sidebar</a></li>
                                        <li><a href="blog-post-right-sidebar.html">Blog Post Right Sidebar</a></li>
                                        <li><a href="blog-post-image-format.html">Blog Post Image Format</a></li>
                                        <li><a href="blog-post-image-gallery.html">Blog Post Image Gallery</a></li>
                                        <li><a href="blog-post-audio-format.html">Blog Post Audio Format</a></li>
                                        <li><a href="blog-post-video-format.html">Blog Post Video Format</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>

                        <div className="offcanvas-settings">
                            <nav className="offcanvas-navigation">
                                <ul>
                                    <li className="menu-item-has-children"><a href="index.html#">MY ACCOUNT </a>
                                        <ul className="sub-menu">
                                            <li><a href="login-register.html">Register</a></li>
                                            <li><a href="login-register.html">Login</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="index.html#">CURRENCY: USD </a>
                                        <ul className="sub-menu">
                                            <li><a href="javascript:void(0)">€ Euro</a></li>
                                            <li><a href="javascript:void(0)">$ US Dollar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="index.html#">LANGUAGE: EN-GB </a>
                                        <ul className="sub-menu">
                                            <li><a href="javascript:void(0)"><img src="assets/img/icons/en-gb.png" alt="" /> English</a></li>
                                            <li><a href="javascript:void(0)"><img src="assets/img/icons/de-de.png" alt="" /> Germany</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="offcanvas-widget-area">
                            <div className="off-canvas-contact-widget">
                                <div className="header-contact-info">
                                    <ul className="header-contact-info__list">
                                        <li><i className="ion-android-phone-portrait"></i> <a href="tel://12452456012">(1245) 2456 012 </a></li>
                                        <li><i className="ion-android-mail"></i> <a href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="off-canvas-widget-social">
                                <a href="index.html#" title="Facebook"><i className="fa fa-facebook"></i></a>
                                <a href="index.html#" title="Twitter"><i className="fa fa-twitter"></i></a>
                                <a href="index.html#" title="LinkedIn"><i className="fa fa-linkedin"></i></a>
                                <a href="index.html#" title="Youtube"><i className="fa fa-youtube-play"></i></a>
                                <a href="index.html#" title="Vimeo"><i className="fa fa-vimeo-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
