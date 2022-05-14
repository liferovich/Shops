import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <><div className="footer-area">
            <div className="footer-copyright">
                <div className="container wide">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright-wrapper footer-copyright-wrapper--default-footer">
                                <div className="container">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col-lg-2 col-md-2">
                                            <div className="footer-logo" >
                                            <NavLink to="/" className="logo-title-f"><img src="http://brigmebel.by/img/newframework1609-logo-1467358387.jpg" className="img-fluid logo-title-f" alt="" /></NavLink>
                                            </div>
                                        </div>

                                        <div className="col-lg-7 col-md-5">
                                            <div className="copyright-text">
                                                Copyright &copy; 2022 <NavLink to="/">ОАО "Актамир" БрИг</NavLink>.  Все права защищены.
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-5">
                                            <div className="copyright-social-wrapper">
                                                <ul className="copyright-social">
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
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
        </div></>
    )
}