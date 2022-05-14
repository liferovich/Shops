import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProductItem from '../../components/ProductItem'
import {
  products,
  getProducts,
  filterProducts,
  fProducts
} from '../../features/AppSlice'

const CategoryNeon = () => {
  const [filter, setFilter] = useState([])
  const dispatch = useDispatch()
  const appProducts = useSelector(products)
  const appFProducts = useSelector(fProducts)

  const sortByNew = () => {
    appProducts.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
  }

  const sortByPriceUp = () => {
    appProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  }
  const sortByPriceDown = () => {
    appProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  }

  const filterAllProducts = (filters) => {
    console.log(filters)
    dispatch(filterProducts({filters}))
  }

  const changeFilter = e => {
    const index = filter.indexOf(e.target.value)
    console.log(e.target.value)
    if (index == -1) {
      setFilter([...filter, e.target.value])
      filterAllProducts([...filter, e.target.value])
    } else {
      setFilter([...filter.filter(f => f != e.target.value)])
      filterAllProducts([...filter.filter(f => f != e.target.value)])
    }
  }

  useEffect(() => {
    dispatch(getProducts('Гибкий неон'))
  }, [dispatch])

  return (
    <>
      <div className='tt-breadcrumb'>
        <div className='container container-lg-fluid'>
          <ul>
            <li>
              <NavLink to='/'>Главная</NavLink>
            </li>
            <li>
              <NavLink to='/catalog'>Каталог</NavLink>
            </li>
            <li>Гибкий неон</li>
          </ul>
        </div>
      </div>
      <div className='section-indent'>
        <div className='container container-lg-fluid'>
          <div className='row'>
            <div
              className='col-md-4 col-lg-3 col-xl-3 leftColumn tt-aside'
              id='aside-js'
            >
              <div className='tt-block-aside tt-block-aside__shadow'>
                <h3 className='tt-aside-title'>Категории</h3>
                <div className='tt-aside-content'>
                  <nav className='nav-categories'>
                    <ul>
                      <li>
                        <NavLink to='/catalog/neon'>Гибкий неон</NavLink>
                      </li>
                      <li>
                        <NavLink to='/catalog/string'>
                          Табло бегущая строка
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='/catalog/led'>
                          Декоративное Освещение
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='tt-block-aside tt-block-aside__shadow'>
                <h3 className='tt-aside-title'>Мощность</h3>
                <div className='tt-aside-content'>
                  <div className='custom-checkbox'>
                    <label className='container-check'>
                      8 Вт/м
                      <input
                        type='checkbox'
                        value='8'
                        name='filter'
                        checked={filter.indexOf('8') == -1 ? false : true}
                        onChange={changeFilter}
                      />
                      <span className='checkmark'></span>
                    </label>
                    <label className='container-check'>
                      12 Вт/м
                      <input
                        type='checkbox'
                        value='12'
                        name='filter'
                        checked={filter.indexOf('12') == -1 ? false : true}
                        onChange={changeFilter}
                      />
                      <span className='checkmark'></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 col-lg-9 col-xl-9'>
              <div className='section-title text-left'>
                <div className='section-title__01'>Каталог</div>
                <div className='section-title__02'>Гибкий неон</div>
              </div>
              <div className='tt-filters-options'>
                <div className='row justify-content-between'>
                  <div className='col-auto ml-right'>
                    <div
                      className='tt-filters-toggle icon-icon-filter'
                      id='js-filters-toggle'
                    ></div>
                    <div className='tt-title'>
                      {appProducts.length} результат(ов)
                    </div>
                    <div className='tt-filters-select'>
                      <div className='custom-select'>
                        <select>
                          <option onClick={sortByNew}>Новинки</option>
                          <option onClick={sortByPriceUp}>По цене ↑</option>
                          <option onClick={sortByPriceDown}>По цене ↓</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='tt-product-listing' className='tt-product-listing row'>
                {appFProducts.length
                  ? appFProducts.map(product => (
                      <ProductItem product={product} key={product.id} />
                    ))
                  : appProducts.map(product => (
                      <ProductItem product={product} key={product.id} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryNeon
