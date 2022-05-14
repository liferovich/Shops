import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../assets/img/mainslide-01.jpg';
import slide2 from '../assets/img/mainslide-02.jpg';
import slide3 from '../assets/img/mainslide-03.jpg';
import layout01 from '../assets/img/layout01-img05.jpg';
import layout02 from '../assets/img/layout01-img06.jpg';
import category1 from '../assets/img/slideinfo-01.jpg';
import category2 from '../assets/img/slideinfo-02.jpg';
import category3 from '../assets/img/slideinfo-03.jpg';

const HomePage = () => {
    return (<>
        <div className="container-indent no-margin mainSlider-wrapper">
            <Carousel className="mainSlider" infiniteLoop useKeyboardArrows autoPlay showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
                <div>
                    <img src={slide1} className="img--holder"/>
                    <div className="slide-content">
                        <div className="container text-center js-rotation" data-animation="fadeInUpSm"
                            data-animation-delay="0s">
                            <div className="tt-title-01">Дюралайт, декоративное освещение, гибкий неон</div>
                            <div className="tt-title-02">Добро пожаловать на<br></br>«СветомирБай»!</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={slide2} className="img--holder"/>
                    <div className="slide-content">
                        <div className="container text-center js-rotation" data-animation="fadeInUpSm"
                            data-animation-delay="0s">
                            <div className="tt-title-01">Делаем клиентов счастливее</div>
                            <div className="tt-title-02">Лучшие услуги<br></br>для вашей Семьи</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={slide3} className="img--holder"/>
                    <div className="slide-content">
                        <div className="container text-center js-rotation" data-animation="fadeInUpSm"
                            data-animation-delay="0s">
                            <div className="tt-title-01">Мы можем осветить всё</div>
                            <div className="tt-title-02">Для нас нет ничего <br></br>невозможного</div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
        <div className="section-indent">
            <div className="container container-lg-fluid">
                <div className="layout01 layout01__img-more">
                    <div className="layout01__img">
                        <div className="tt-img-main">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAAIoAQMAAACMEcszAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAERJREFUeNrtwQENAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC0A7dIAAFubGEWAAAAAElFTkSuQmCC"
                                data-src={layout01} className="lazyload" alt="" /></div>
                        <div className="tt-img-more left-bottom">
                            <img
                                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                data-src={layout02} className="lazyload" alt="" /></div>
                    </div>
                    <div className="layout01__content">
                        <div className="layout01__content-wrapper">
                            <div className="section-title text-left">
                                <div className="section-title__01">О нас</div>
                                <div className="section-title__02">ООО «СветомирБай»</div>
                            </div>
                            <p>Основался на рынке продаж в 2000-ых годах, но как общество начал работать с 20 февраля 2015. За это время мы сумели зарекомендовать себя в качестве надежного и проверенного партнера.</p>

                            <ul className="tt-list01 tt-list-top">
                                Компания занимается:
                                <li>продажей электротехники,</li>
                                <li>монтажом,</li>
                                <li>предоставляет широкий спектр услуг рекламы,</li>
                                <li>оформление зданий и прилегающей территории.</li>
                            </ul>
                            <p>Вы сможете быстро, надежно и удобно приобрести представленную на витрине магазина электротехническую продукцию.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-indent">
            <div className="tt-slideinfo-wrapper slick-type01">
                <div className="tt-slideinfo">
                    <div className="tt-item__bg">
                        <div data-bg={category1} className="lazyload tt-item__bg-img"></div>
                        <div className="tt-item__bg-top"></div>
                    </div>
                    <div className="tt-item__content">
                        <div className="tt-item__title"><span
                            className="tt-text">Светодиодные модули</span></div>
                        <div className="tt-item__description">Светодиодные модули  – это специальные осветительные приборы, представляющие собой цельные конструкции, которые оснащены различными типами светодиодов – SMD 3528, SMD 5050, SMD 5630. Устройства могут иметь открытый корпус с функцией влагозащиты или без нее, а также изолированную герметичную оболочку.</div>
                        <div className="tt-item__btn"><a href="#">+</a></div>
                    </div>
                </div>
                <div className="tt-slideinfo">
                    <div className="tt-item__bg">
                        <div data-bg={category2} className="lazyload tt-item__bg-img"></div>
                        <div className="tt-item__bg-top"></div>
                    </div>
                    <div className="tt-item__content">
                        <div className="tt-item__title"><span
                            className="tt-text">Декоративное освещение</span></div>
                        <div className="tt-item__description">Декоративное освещение – является эффективным способом создать непередаваемую атмосферу, подчеркнуть достоинства и скрыть недостатки в интерьере или экстерьере. Магазин Светомир, предлагает Вам светодиодные акриловые фигуры, гирлянды “Бахрома” и “Дождь”, гибкий неон (Led-neon) и многое другое.</div>
                        <div className="tt-item__btn"><a href="#">+</a></div>
                    </div>
                </div>
                <div className="tt-slideinfo">
                    <div className="tt-item__bg">
                        <div data-bg={category3} className="lazyload tt-item__bg-img"></div>
                        <div className="tt-item__bg-top"></div>
                    </div>
                    <div className="tt-item__content">
                        <div className="tt-item__title"><span
                            className="tt-text">Светодиодные ленты</span></div>
                        <div className="tt-item__description">Светодиодные ленты являются экономичным источником точечного света, способные давать потрясающий яркий свет. Освещение на основе светодиодных лент используется для контурного освещения, в ночных клубах, ресторанах, в подсветке автомобиля, в интерьере и светодизайне.</div>
                        <div className="tt-item__btn"><a href="#">+</a></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default HomePage;