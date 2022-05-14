import { NavLink } from "react-router-dom";

const News = () => {
    return (<>
        <div className='tt-breadcrumb'>
            <div className='container container-lg-fluid'>
                <ul>
                    <li>
                        <NavLink to='/'>Главная</NavLink>
                    </li>
                    <li>Новости и Акции</li>
                </ul>
            </div>
        </div>
        <div className="section-indent">
            <div className="container container-md-fluid">
                <div className="tt-blog-list">
                    <div className="tt-item">
                        <div className="blog-obj">
                            <div className="blog-obj__img"><a href="#"><img
                                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                                className="lazyload" data-src="images/blog/blog_img01.jpg" alt="" /></a></div>
                            <div className="blog-obj__wrapper">
                                <div className="blog-obj__data">
                                    <div className="tt-col">
                                        <div className="data__time">5 May, 2022</div>
                                    </div>
                                    <div className="tt-col">
                                        <div className="data__posted">Автор: <a href="#">Админ</a></div>
                                    </div>
                                    <div className="tt-col">
                                        <div className="data__comments">3 Комментария</div>
                                    </div>
                                </div>
                                <h3 className="blog-obj__title"><a href="#">Светодиодные лампы в СветомирБай!</a></h3>
                                <p>Светоизлучающие диоды – это развивающаяся технология, которая стала предпочтительной альтернативой традиционным методам освещения. Подобно автомобилям и одежде, светодиоды – это категория с разными разновидностями, от лампочек до осветительных приборов....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default News;