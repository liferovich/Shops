import { NavLink } from "react-router-dom";

const About = () => {
    return (<>
        <div className="breadcrumb-area section-space--half">
            <div className="container wide">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-wrapper breadcrumb-bg">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-content__title">О нас</h2>
                                <ul className="breadcrumb-content__page-map">
                                    <li><NavLink to="/">Главная</NavLink></li>
                                    <li className="active">О нас</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-content-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-wrapper">
                            <div className="page-content-wrapper">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="about-top-content-wrapper">
                                            <div className="row row-30">
                                                <div className="col-lg-6">
                                                    <div className="about-image">
                                                        <img src="assets/img/banners/img2-middle-eposi1.jpg" className="img-fluid" alt="" />
                                                    </div>
                                                </div>

                                                <div className="about-content col-lg-6">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <h1>Добро пожаловать в <span>ОАО «Актамир».</span></h1>
                                                            <p className="mb-3">Широкий ассортимент и постоянное наличие готовой продукции способствует её оперативной отгрузке всем нашим клиентам. Низкие цены и высокое качество - неотъемлемые и признанные показатели нашей мебели.</p>
                                                        </div>

                                                        <div className="col-12">
                                                            <h4>Большой выбор предлагаемых материалов различных расцветок позволит удовлетворить различные запросы покупателей.</h4>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row about-top-content-wrapper">
                                    <div className="col-md-12 col-12">
                                        <p>Барановичская фабрика «Бриг» ОАО «Актамир» переименована в Унитарное производственное предприятие «Бриг» открытого акционерного общества «Актамир» в 2000 г., свидетельство о регистрации № 200166779 от 31.08.2000 г.</p>
                                        <p>Предприятие выпускает полный ассортимент мебели для оснащения учреждений образования, офисов, детских комнат и выполнением индивидуальных заказов.</p>
                                        <p>Наша продукция отличается современным дизайном и высоким качеством, отвечает санитарно-гигиеническим нормам и ГОСТам Республики Беларусь и РФ, имеет сертификаты соответствия.</p>
                                        <p>В производстве детской мебели мы используем высококачественные, экологически чистые материалы белорусского и зарубежного производства.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="about-section-title col-12">
                                        <h3>ОФИЦИАЛЬНЫЕ ПРЕДСТАВИТЕЛИ В РБ:</h3>
                                    </div>

                                    <div className="about-feature col-md-7 col-12 mb-sm-30">
                                        <div className="row">

                                            <div className="col-md-6 col-12">
                                                <h4>г. Минск, РУП "Глобус"</h4>
                                                <p>тел.:8(017)326-01-16, 337-43-73 </p>
                                            </div>

                                            <div className="col-md-6 col-12">
                                                <h4>г.Брест, РТ ДУП "Глобус-3"</h4>
                                                <p>тел.:8(0162)29-06-00, 29-33-28</p>
                                            </div>

                                            <div className="col-md-6 col-12">
                                                <h4>г.Витебск, РТ ДУП "Глобус-4"</h4>
                                                <p>тел.:8(0212)66-54-80,60-27-58</p>
                                            </div>

                                            <div className="col-md-6 col-12">
                                                <h4>г.Гродно, РТ ДУП "Глобус-5"</h4>
                                                <p>тел.:8(0152)75-82-01, 75-81-86</p>
                                            </div>

                                            <div className="col-md-6 col-12">
                                                <h4>г.Гомель, РТ ДУП "Глобус-6"</h4>
                                                <p>тел.: 8(0232)30-61-73, 29-56-80</p>
                                            </div>

                                            <div className="col-md-6 col-12">
                                                <h4>г.Могилев, РТ ДУП "Глобус-7"</h4>
                                                <p>тел.:8(0222)26-02-65, 26-03-74</p>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="about-feature-banner col-md-5 col-12">
                                        <div className="single-banner mb-0"><a href="about.html#"><img src="assets/img/banners/banner7.jpg" className="img-fluid" alt="Banner" /></a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default About;