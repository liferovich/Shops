import { NavLink } from 'react-router-dom'

const Catalog = () => {
  return (
    <>
      <div className='tt-breadcrumb'>
        <div className='container container-lg-fluid'>
          <ul>
            <li>
              <NavLink to='/'>Главная</NavLink>
            </li>
            <li>Каталог</li>
          </ul>
        </div>
      </div>
      <div className='section-indent'>
        <div className='container container-lg-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title text-left'>
                <div className='section-title__02'>Каталог</div>
                <div className='section-title__03'>
                  Более 300 вариантов исполнения гибкого неона, более 100
                  светильников различного назначения в нашем каталоге
                  светодиодного оборудования в наличии и под заказ.
                </div>
              </div>
              <div id='tt-product-listing' className='tt-product-listing row'>
                <div className='col-6 col-md-4 tt-col-item'>
                  <div className='tt-block-aside tt-block-aside__shadow'>
                    <div className='tt-product'>
                      <div className='tt-product__img'>
                        <NavLink to='/catalog/neon'>
                          <img
                            src='images/category/neon.jpg'
                            alt='Гибкий неон'
                          />
                        </NavLink>
                      </div>
                      <div className='tt-product__description'>
                        <h2 className='tt-product__title'>
                          <NavLink to='/catalog/neon'>Гибкий неон</NavLink>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-6 col-md-4 tt-col-item'>
                  <div className='tt-block-aside tt-block-aside__shadow'>
                    <div className='tt-product'>
                      <div className='tt-product__img'>
                        <NavLink to='/catalog/string'>
                          <img
                            src='images/category/string.jpg'
                            alt='Гибкий неон'
                          />
                        </NavLink>
                      </div>
                      <div className='tt-product__description'>
                        <h2 className='tt-product__title'>
                          <NavLink to='/catalog/string'>
                            Табло бегущая строка
                          </NavLink>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-6 col-md-4 tt-col-item'>
                  <div className='tt-block-aside tt-block-aside__shadow'>
                    <div className='tt-product'>
                      <div className='tt-product__img'>
                        <NavLink to='/catalog/led'>
                          <img
                            src='images/category/led.jpg'
                            alt='Гибкий неон'
                          />
                        </NavLink>
                      </div>
                      <div className='tt-product__description'>
                        <h2 className='tt-product__title'>
                          <NavLink to='/catalog/led'>
                            Декоративное Освещение
                          </NavLink>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog
