import { NavLink } from "react-router-dom";

const About3 = () => {
    return (<>
        <div className="breadcrumb-area section-space--half">
            <div className="container wide">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-wrapper breadcrumb-bg">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-content__title">О нас 3</h2>
                                <ul className="breadcrumb-content__page-map">
                                    <li><NavLink to="/">Главная</NavLink></li>
                                    <li><NavLink to="/about">О нас</NavLink></li>
                                    <li className="active">О нас 3</li>
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
                                <div className="row about-top-content-wrapper">
                                    <div className="col-md-12 col-12">
                                        <p>Барановичская фабрика «Бриг» ОАО «Актамир» переименована в Унитарное производственное предприятие «Бриг» открытого акционерного общества «Актамир» в 2000 г., свидетельство о регистрации № 200166779 от 31.08.2000 г.</p>
                                        <p>Предприятие выпускает полный ассортимент мебели для оснащения учреждений образования, офисов, детских комнат и выполнением индивидуальных заказов.</p>
                                        <p>Наша продукция отличается современным дизайном и высоким качеством, отвечает санитарно-гигиеническим нормам и ГОСТам Республики Беларусь и РФ, имеет сертификаты соответствия.</p>
                                        <p>В производстве детской мебели мы используем высококачественные, экологически чистые материалы белорусского и зарубежного производства.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>)
}

export default About3;