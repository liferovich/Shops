import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <footer id="tt-footer">
            <div className="footer-wrapper">
                <div className="container container-lg-fluid container-lg__no-gutters">
                    <p> </p>
                </div>
                <div className="container container-lg-fluid container-lg__no-gutters">
                    <div className="f-holder row no-gutters">
                        <div className="col-xl-9">
                            <div className="additional-strut">
                                <div className="row">
                                    <div className="col-xl-5">
                                        <div className="f-logo">
                                            <NavLink to='/' className="f-logo">
                                                <span className="tt-icon">
                                                    <img src="images/logo-dark.png" alt="" /></span>
                                                <span className="tt-text">СветомирБай</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="col-xl-7">
                                        <div className="f-info-text">Вы сможете быстро, надежно и удобно приобрести представленную на витрине магазина электротехническую продукцию. Наша задача — удовлетворить потребности и больших компаний, и частных лиц.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-5">
                                    <nav className="f-nav" id="f-nav">
                                        <ul>
                                            <li><NavLink to='/'>Главная</NavLink></li>
                                            <li><NavLink to='/catalog'>Каталог</NavLink></li>
                                            <li><NavLink to='/news'>Новости и Акции</NavLink></li>
                                            <li><NavLink to='/about'>О нас</NavLink></li>
                                            <li><NavLink to='/contacts'>Контакты</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-sm-6 col-md-7">
                                    <ul className="f-info-icon">
                                        <li><span className="icon-map-marker"></span>220015, г. Минск, ул. Пономаренко, д.35А, <br></br>офис 224</li>
                                        <li><span className="icon-clock-circular-outline-1"></span>Пн-Пт 09:00 - 18:00
                                        </li>
                                        <li><a href="tel:+375(29) 151-11-02"><span className="icon-telephone"></span>+375(29) 151-11-02</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="map"></div>
                    <div className="f-copyright row no-gutters">
                        <div className="col-sm-auto">&copy; 2022 "СветомирБай". Все права защищены.</div>
                        <div className="col-sm-auto ml-sm-auto">
                            <ul className="f-social">
                                <li><a href="#" className="icon-twitter-logo-button"></a></li>
                                <li><a href="#" className="icon-facebook-logo-button"></a></li>
                                <li><a href="#" className="icon-instagram-logo"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}