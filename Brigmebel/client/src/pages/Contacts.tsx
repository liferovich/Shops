import { NavLink } from "react-router-dom"

const Contacts = () => {
    return (<>
        <div className="breadcrumb-area section-space--half">
            <div className="container wide">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-wrapper breadcrumb-bg">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-content__title">Контакты</h2>
                                <ul className="breadcrumb-content__page-map">
                                    <li><NavLink to="/">Главная</NavLink></li>
                                    <li className="active">Контакты</li>
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
                                    <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">

                                        <div className="contact-page-side-content">
                                            <h3 className="contact-page-title">Наши контакты</h3>
                                            <p className="contact-page-message">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>

                                            <div className="single-contact-block">
                                                <h4><i className="fa fa-fax"></i> Адрес</h4>
                                                <p>Брестская область 225409, г. Барановичи, ул. Мицкевича, 14</p>
                                            </div>

                                            <div className="single-contact-block">
                                                <h4><i className="fa fa-phone"></i> Телефоны</h4>
                                                <p>Отдел маркетинга и сбыта: 8 (0163) 63-27-66</p>
                                                <p>Бухгалтерия: 8 (0163) 64-42-11</p>
                                            </div>

                                            <div className="single-contact-block">
                                                <h4><i className="fa fa-envelope-o"></i> Email</h4>
                                                <p>brig-aktamir@yandex.ru</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">

                                        <div className="contact-form-content">
                                            <h3 className="contact-page-title">Свяжитесь с нами</h3>

                                            <div className="contact-form">
                                                <form id="contact-form" action="" method="post">
                                                    <div className="form-group">
                                                        <label>Ваше имя <span className="required">*</span></label>
                                                        <input type="text" name="con_name" id="con_name" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Ваш Email <span className="required">*</span></label>
                                                        <input type="email" name="con_email" id="con_email" required />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Сообщение</label>
                                                        <textarea name="con_message" id="con_message"></textarea>
                                                    </div>
                                                    <div className="form-group mb-0">
                                                        <button type="submit" value="submit" id="submit" className="contact-button" name="submit">Отправить</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <p className="form-messege"></p>
                                        </div>

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

export default Contacts