import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (<>
        <div className="hero-slider-area section-space">
            <div className="container wide">
                <div className="row">
                    <div className="col-lg-12">

                        <Carousel className="mainSlider" infiniteLoop useKeyboardArrows autoPlay showArrows showStatus={false} showIndicators={false} showThumbs={false}>
                            <div className="single-slider-item">
                                <div className="hero-slider-item-wrapper hero-slider-bg-2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hero-slider-content hero-slider-content--left-space">
                                                    <p className="slider-title slider-title--big-light">Удивительные товары!</p>
                                                    <p className="slider-title slider-title--big-bold">НОВОЕ ПОСТУПЛЕНИЕ</p>
                                                    <p className="slider-title slider-title--small">Мы используем свой опыт, знания и умение и предлагаем лучшие изделия для здорового сна, комфорта и красоты в каждом доме.</p>
                                                    <NavLink className="hero-slider-button" to="/catalog"> <i className="ion-ios-plus-empty"></i> В Каталог</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slider-item">
                                <div className="hero-slider-item-wrapper hero-slider-bg-7">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hero-slider-content hero-slider-content--left-space">
                                                    <p className="slider-title slider-title--big-light">Удивительные товары!</p>
                                                    <p className="slider-title slider-title--big-bold">ДОМ</p>
                                                    <p className="slider-title slider-title--small">Дом занимает очень важное место в жизни каждого человека. В нем мы строим семью, в него приводим друзей, в нем отдыхаем и набираемся сил после долгого рабочего дня. У каждого свое представление о том, каким должен быть дом, но все мы стремимся к тому, чтобы он был уютным и комфортным.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slider-item">
                                <div className="hero-slider-item-wrapper hero-slider-bg-1">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="hero-slider-content hero-slider-content--left-space">
                                                    <p className="slider-title slider-title--big-light">Удивительные товары!</p>
                                                    <p className="slider-title slider-title--big-bold">АКСЕССУАРЫ</p>
                                                    <p className="slider-title slider-title--small">Широкий ассортимент и постоянное наличие готовой продукции способствует её оперативной отгрузке всем нашим клиентам. Низкие цены и высокое качество - неотъемлемые и признанные показатели нашей мебели.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
        <div className="category-area section-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="category-wrapper">
                            <div className="row row-10 masonry-category-layout">
                                <div className="col-lg-4 col-sm-6 grid-item">
                                    <div className="single-category-item">
                                        <div className="single-category-item__image">
                                            <a href="shop-left-sidebar.html">
                                                <img src="assets/img/category/img1-top-eposi1.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="single-category-item__content">
                                            <h3 className="title">Наборы мебели</h3>
                                            <a href="shop-left-sidebar.html">Купить <i className="ion-android-arrow-dropright-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 grid-item">
                                    <div className="single-category-item">
                                        <div className="single-category-item__image">
                                            <a href="shop-left-sidebar.html">
                                                <img src="assets/img/category/img1-top-eposi6.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="single-category-item__content">
                                            <h3 className="title">Каталог</h3>
                                            <NavLink to="/catalog">Купить <i className="ion-android-arrow-dropright-circle"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="single-category-item">
                                        <div className="single-category-item__image">
                                            <a href="shop-left-sidebar.html">
                                                <img src="assets/img/category/img4-top-eposi1.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="single-category-item__content">
                                            <h3 className="title">Стулья</h3>
                                            <a href="shop-left-sidebar.html">Купить <i className="ion-android-arrow-dropright-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 grid-item">
                                    <div className="single-category-item">
                                        <div className="single-category-item__image">
                                            <a href="shop-left-sidebar.html">
                                                <img src="assets/img/category/img3-top-eposi1.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="single-category-item__content">
                                            <h3 className="title">Аксессуары</h3>
                                            <a href="shop-left-sidebar.html">Купить <i className="ion-android-arrow-dropright-circle"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 grid-item">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-hover-area section-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-hover-wrapper">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-hover-banner">
                                        <div className="single-hover-banner__image">
                                            <a href="#">
                                                <img src="assets/img/banners/img1-middle-eposi1.jpg" className="img-fluid" alt="" />
                                            </a>
                                            <div className="single-hover-banner__content">
                                                <h4 className="small-text">Чёрная пятница</h4>
                                                <h3 className="big-text">Скидки до 50%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="single-hover-banner">
                                        <div className="single-hover-banner__image">
                                            <a href="#">
                                                <img src="assets/img/banners/img2-middle-eposi1.jpg" className="img-fluid" alt="" />
                                            </a>
                                            <div className="single-hover-banner__content">
                                                <h4 className="small-text">Бестселлеры !</h4>
                                                <h3 className="big-text">Скидки на мебель до 70%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="feature-logo-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="feature-logo-wrapper section-space--inner-bottom">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-feature-logo">
                                        <div className="single-feature-logo__image">
                                            <img src="assets/img/icons/free_shipping.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="single-feature-logo__content">
                                            <h4 className="title">ДОСТАВКА</h4>
                                            <p className="short-desc">Доставка по всем регионам Беларуси!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-feature-logo">
                                        <div className="single-feature-logo__image">
                                            <img src="assets/img/icons/money_back.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="single-feature-logo__content">
                                            <h4 className="title">КАЧЕСТВО</h4>
                                            <p className="short-desc">Мы гарантируем качество и надёжность нашей продукции!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-feature-logo">
                                        <div className="single-feature-logo__image">
                                            <img src="assets/img/icons/support247.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="single-feature-logo__content">
                                            <h4 className="title">ПОДДЕРЖКА 24/7</h4>
                                            <p className="short-desc">Наша служба поддержки работает 24 часа, 7 дней в неделю!</p>
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

export default HomePage;