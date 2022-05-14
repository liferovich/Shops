import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { cartLength, wishlistLength } from '../features/AppSlice'

export const Header = () => {
    const productCartLength = useSelector(cartLength)
    const productWishlistLength = useSelector(wishlistLength)

    return (
        <header>
            <div className="holder-top-mobile d-block d-md-none">
                <div className="h-topbox__content">
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-map-marker"></span></div>
                        <div className="tt-item__text">
                            <address>220015, г. Минск, ул. Пономаренко, д.35А, офис 224</address>
                        </div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-482948"></span></div>
                        <div className="tt-item__text"><a href="mailto:svetomir2015@mail.ru">svetomir2015@mail.ru</a></div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-telephone"></span></div>
                        <div className="tt-item__text">
                            <address><a href="tel:+375(29) 151-11-02">+375(29) 151-11-02</a></address>
                        </div>
                    </div>
                    <div className="tt-item">
                        <div className="tt-item__icon"><span className="icon-clock-circular-outline-1"></span></div>
                        <div className="tt-item__text">Пн-Пт 09:00 - 18:00</div>
                    </div>
                </div><a href="#" className="h-topbox__btn" id="js-toggle-h-holder"><i className="tt-arrow down"></i></a>
            </div>

            <div className="holder-top-desktop d-none d-md-block">
                <div className="container container-lg-fluid">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <div className="h-info01">
                                <div className="tt-item">
                                    <address><span className="icon-map-marker"></span>220015, г. Минск, ул. Пономаренко, д.35А, офис 224
                                    </address>
                                </div>
                                <div className="tt-item"><span className="icon-clock-circular-outline-1"></span>Пн-Пт 09:00 - 18:00</div>
                            </div>
                        </div>
                        <div className="col-auto ml-auto">
                            <div className="tt-obj">
                                <div className="h-info02">
                                    <div className="tt-item">
                                        <address><a href="tel:1(800)7654321"><span className="icon-telephone"></span>+375(29) 151-11-02</a></address>
                                    </div>
                                </div>
                            </div>
                            <div className="tt-obj tt-obj-cart js-dropdown-cart">
                                <NavLink to="/wishlist" className="tt-obj__btn">
                                    <i className="tt-icon  icon-favorite"></i>
                                    <div className="tt-obj__badge">{productWishlistLength}</div>
                                </NavLink>
                                <NavLink to="/cart" className="tt-obj__btn"><i
                                    className="icon-808584"></i>
                                    <div className="tt-obj__badge">{productCartLength}</div>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="js-init-sticky">
                <div className="tt-holder-wrapper">
                    <div className="container container-lg-fluid">
                        <div className="tt-holder">
                            <div className="tt-col-logo">
                                <NavLink to='/' className="tt-logo tt-logo-alignment"><span
                                    className="tt-icon"><img src="images/logo.png" alt="" /></span>СветомирБай</NavLink>
                            </div>
                            <div className="tt-col-objects tt-col-wide text-center">

                                <nav id="tt-nav">
                                    <ul>
                                        <li>
                                            <NavLink to="/">
                                                <div className="electric-btn"><span className="text">Главная</span>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                    <div className="mask"><span>Главная</span></div>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/catalog">
                                                <div className="electric-btn"><span className="text">Каталог</span>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                    <div className="mask"><span>Каталог</span></div>
                                                </div>
                                            </NavLink>
                                            <ul>
                                                <li>
                                                    <NavLink to='/catalog/neon'>Гибкий неон</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/catalog/string'>
                                                        Табло бегущая строка
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/catalog/led'>
                                                        Декоративное Освещение
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><NavLink to='/news'>
                                            <div className="electric-btn"><span className="text">Новости и Акции</span>
                                                <div className="mask"><span>Новости и Акции</span></div>
                                                <div className="mask"><span>Новости и Акции</span></div>
                                                <div className="mask"><span>Новости и Акции</span></div>
                                                <div className="mask"><span>Новости и Акции</span></div>
                                                <div className="mask"><span>Новости и Акции</span></div>
                                                <div className="mask"><span>Новости и Акции</span></div>
                                            </div>
                                        </NavLink>
                                        </li>
                                        <li><NavLink to='/about'>
                                            <div className="electric-btn"><span className="text">О нас</span>
                                                <div className="mask"><span>О нас</span></div>
                                                <div className="mask"><span>О нас</span></div>
                                                <div className="mask"><span>О нас</span></div>
                                                <div className="mask"><span>О нас</span></div>
                                                <div className="mask"><span>О нас</span></div>
                                                <div className="mask"><span>О нас</span></div>
                                            </div>
                                        </NavLink>
                                        </li>
                                        <li><NavLink to='/contacts'>
                                            <div className="electric-btn"><span className="text">Контакты</span>
                                                <div className="mask"><span>Контакты</span></div>
                                                <div className="mask"><span>Контакты</span></div>
                                                <div className="mask"><span>Контакты</span></div>
                                                <div className="mask"><span>Контакты</span></div>
                                                <div className="mask"><span>Контакты</span></div>
                                                <div className="mask"><span>Контакты</span></div>
                                            </div>
                                        </NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="tt-col-objects">
                                <div className="tt-col__item d-block d-lg-none">
                                    <div className="tt-obj tt-obj-cart js-dropdown-cart">
                                        <NavLink to="/cart" className="tt-obj__btn"><i
                                            className="icon-808584"></i>
                                            <div className="tt-obj__badge">{productCartLength}</div>
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
