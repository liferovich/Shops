import { NavLink } from "react-router-dom"

const Contacts = () => {
    return (<>
        <div className='tt-breadcrumb'>
            <div className='container container-lg-fluid'>
                <ul></ul>
            </div>
        </div>
        <div className="section-indent-extra">
            <div className="container container-lg-fluid">
                <div className="section__wrapper02 tt-contact-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-4">
                            <div className="tt-contact">
                                <div className="tt-icon"><i className="icon-map-marker"></i></div>
                                <div className="tt-content">
                                    <div className="tt-title">Юр. Адрес:</div>
                                    <span>220015<br></br> г. Минск, ул. Пономаренко, д.35А, <br></br>офис 224</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="tt-contact">
                                <div className="tt-icon"><i className="icon-clock-circular-outline-1"></i></div>
                                <div className="tt-content">
                                    <div className="tt-title">Время работы:</div>Пн-Пт: 09:00 - 18:00<br></br>Сб-Вс: выходные
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="tt-contact">
                                <div className="tt-icon"><i className="icon-telephone"></i></div>
                                <div className="tt-content">
                                    <div className="tt-title">Контакты:</div>
                                    <address><a href="tel:+375(29) 151-11-02">+375(29) 151-11-02</a></address>
                                    <address><a href="tel:+375 (29) 151-11-02">+375 (29) 151-11-02</a></address>
                                    <address><a href="tel:+375 (29) 656-67-77">+375 (29) 656-67-77</a></address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-indent">
            <div className="container container-md-fluid">
                <div className="section-title max-width-01">
                    <div className="section-title__01">Форма обратной связи</div>
                    <div className="section-title__02">Свяжитесь с нами</div>
                    <div className="section-title__03">Наша задача — удовлетворить потребности больших компаний и частных лиц.</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form id="feedbackform" className="form-default" method="post" action="#">
                            <div className="form-group"><input type="text" name="name" className="form-control"
                                placeholder="Ваше имя*" /></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group"><input type="text" name="email" className="form-control"
                                        placeholder="Ваш адрес *" /></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group"><input type="text" name="phonenumber" className="form-control"
                                        placeholder="Ваш номер телефона" /></div>
                                </div>
                            </div>
                            <div className="form-group"><textarea name="message" className="form-control"
                                placeholder="Комментарии"></textarea></div>
                            <div className="form-group text-center"><button className="tt-btn btn__color01" type="submit"><span
                                className="icon-lightning"></span>Отправить</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Contacts