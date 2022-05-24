import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProductItem from '../components/ProductItem'
import {
  products,
  getProducts,
  sortByNewProducts,
  sortByPriceDownProducts,
  sortByPriceUpProducts
} from '../features/AppSlice'

const Category = () => {
  const dispatch = useDispatch()
  const appProducts = useSelector(products)

  const sortHandler = e => {
    const val = e.target.value
    if (val === '2') {
      sortByPriceUp()
    } else if (val === '1') {
      sortByNew()
    } else {
      sortByPriceDown()
    }
  }

  const sortByNew = () => {
    dispatch(sortByNewProducts())
  }

  const sortByPriceUp = () => {
    dispatch(sortByPriceUpProducts())
  }
  const sortByPriceDown = () => {
    dispatch(sortByPriceDownProducts())
  }

  useEffect(() => {
    dispatch(getProducts('Наборы мебели для дошкольных учреждений'))
  }, [dispatch])

  return (
    <>
      <div className='breadcrumb-area section-space--half'>
        <div className='container wide'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='breadcrumb-wrapper breadcrumb-bg'>
                <div className='breadcrumb-content'>
                  <h2 className='breadcrumb-content__title'> Наборы мебели для дошкольных учреждений</h2>
                  <ul className='breadcrumb-content__page-map'>
                    <li>
                      <NavLink to='/'>Главная</NavLink>
                    </li>
                    <li>
                      <NavLink to='/catalog'>Каталог</NavLink>
                    </li>
                    <li className='active'>
                      Наборы мебели для дошкольных учреждений
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='page-content-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='page-wrapper'>
                <div className='page-content-wrapper'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='shop-header'>
                        <div className='shop-header__left'></div>
                        <div className='shop-header__right'>
                          <div className='single-select-block d-inline-block'>
                            <span className='select-title'>Сортировать:</span>
                            <select
                              className='pr-0'
                              onChange={e => sortHandler(e)}
                            >
                              <option value='1'>По новизне</option>
                              <option value='2'>По цене (min - max)</option>
                              <option value='3'>По цене (max - min)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 order-2 order-lg-1'>
                      <div className='page-sidebar-wrapper'>
                        <div className='single-sidebar-widget'>
                          <h4 className='single-sidebar-widget__title'>
                            Категории
                          </h4>
                          <ul className='single-sidebar-widget__category-list'>
                            <li className='has-children'>
                              <NavLink to='/category'>
                                Наборы мебели для дошкольных учреждений
                              </NavLink>
                            </li>
                            <li>
                              <a href='shop-left-sidebar.html#'>Кровати</a>
                            </li>
                            <li>
                              <a href='shop-left-sidebar.html#'>Тумбы</a>
                            </li>
                            <li>
                              <a href='shop-left-sidebar.html#'>
                                Игровая мебель
                              </a>
                            </li>
                            <li>
                              <a href='shop-left-sidebar.html#'>
                                Стулья и столы
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='single-sidebar-widget'>
                          <div className='sidebar-sub-widget-wrapper'>
                            <div className='sidebar-sub-widget'>
                              <h4 className='sidebar-sub-widget__title sidebar-sub-widget__title--abs-icon'>
                                Материал
                              </h4>
                              <ul className='single-sidebar-widget__category-list single-sidebar-widget__category-list--abs-icon'>
                                <li>
                                  <a href='shop-left-sidebar.html#'>МДФ</a>
                                </li>
                                <li>
                                  <a href='shop-left-sidebar.html#'>ЛДСП</a>
                                </li>
                                <li>
                                  <a href='shop-left-sidebar.html#'>Древесина</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-9 order-1 order-lg-2'>
                      <div className='shop-page-content'>
                        <div className='row shop-product-wrap grid three-column'>
                          {appProducts.map(product => (
                            <ProductItem product={product} key={product.id} />
                          ))}
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
    </>
  )
}

export default Category
