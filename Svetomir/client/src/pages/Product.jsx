import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  product,
  getProductById,
  addCart,
  addWishList,
  wishlist,
  cart
} from '../features/AppSlice'

const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const appProduct = useSelector(product)
  const [isInCart, setIsInCart] = useState(false)
  const [isInFav, setIsInFav] = useState(false)
  const appWishlist = useSelector(wishlist)
  const appCart = useSelector(cart)

  const addToCartProduct = () => {
    if (appProduct.id) {
      setIsInCart(!isInCart)
      dispatch(addCart(appProduct))
    }
  }

  const addToWishListProduct = () => {
    if (appProduct.id) {
      setIsInFav(!isInFav)
      dispatch(addWishList(appProduct))
    }
  }

  useEffect(() => {
    dispatch(getProductById(id))
  }, [id])

  useEffect(() => {
    const index = appCart.findIndex(x => x.id == id)
    if (index !== -1) setIsInCart(true)
  }, [appCart])

  useEffect(() => {
    const index = appWishlist.findIndex(x => x.id == id)
    if (index !== -1) setIsInFav(true)
  }, [appWishlist])

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
            <li>{appProduct?.name}</li>
          </ul>
        </div>
      </div>
      <div className='section-indent'>
        <div className='container container-lg-fluid'>
          <div className='row'>
            <div className='col-5 col-lg-5 d-none d-sm-block'>
              <div className='tt-product-single-img'>
                <div>
                  <img
                    className='zoom-product'
                    src={'../' + appProduct?.image}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-7 col-lg-7'>
              <div className='product-single-info'>
                <div className='tt-tag'>Каталог</div>
                <h1 className='tt-title'>{appProduct?.name}</h1>
                <div className='tt-add-info'>
                  <ul>
                    <li>
                      В наличии: <span>Да</span>
                    </li>
                  </ul>
                </div>
                <div className='tt-price'>{appProduct?.price} руб.</div>
                <div className='tt-description'>{appProduct?.description}</div>
                <div className='tt-row'>
                  <div className='tt-col'>
                    <button
                      className='tt-btn tt-btn__wide btn__color01 tt-input-counter'
                      onClick={addToWishListProduct}
                    >
                      <span className='icon-favorite'></span>
                      {isInFav ? 'Удалить' : 'В избранное'}
                    </button>
                  </div>
                  <div className='tt-col'>
                    <button
                      className='tt-btn tt-btn__wide btn__color01'
                      onClick={addToCartProduct}
                    >
                      <span className='icon-808584'></span>
                      {isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-indent'>
        <div className='container container-lg-fluid'>
          <div className='tt-tab-wrapper'>
            <ul className='nav nav-tabs tt-tabs-default' role='tablist'>
              <li className='nav-item'>
                <a
                  className='nav-link show active'
                  data-toggle='tab'
                  href='#tt-tab-01'
                  role='tab'
                >
                  Описание
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div
                className='tab-pane active fade'
                id='tt-tab-01'
                role='tabpanel'
              >
                {appProduct?.description}
                <ul className='tt-list01 tt-list-top'>
                  <li>Цвет: {appProduct?.color}</li>
                  <li>Мощность: {appProduct?.force} Вт/м</li>
                  <li>Поперечное сечение: {appProduct?.cross} мм</li>
                  <li>МАХ длина подключения: {appProduct?.maxlength} м</li>
                  <li>Кратность резки: {appProduct?.rezka} м</li>
                  <li>Длина рулона: {appProduct?.buhlength} м</li>
                  <li>Рабочее напряжение: {appProduct?.volt} V</li>
                  <li>Размер упаковки: {appProduct?.size} см</li>
                  <li>Вес упаковки: {appProduct?.weight} кг</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
