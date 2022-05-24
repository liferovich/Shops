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
      <div className='breadcrumb-area section-space--half'>
        <div className='container wide'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='breadcrumb-wrapper breadcrumb-bg'>
                <div className='breadcrumb-content'>
                  <h2 className='breadcrumb-content__title'>
                    {appProduct?.name}
                  </h2>
                  <ul className='breadcrumb-content__page-map'>
                    <li>
                      <NavLink to='/catalog'>Каталог</NavLink>
                    </li>
                    <li>
                      <NavLink to='/category'>{appProduct?.category}</NavLink>
                    </li>
                    <li className='active'>{appProduct?.name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='page-content-area'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='page-wrapper'>
                <div class='page-content-wrapper'>
                  <div class='single-product-main-content-area section-space'>
                    <div class='row'>
                      <div class='col-lg-6'>
                        <div class='product-details-slider-area'>
                          <div class='big-image-wrapper'>
                            <div class='single-image'>
                              <img
                                src={'../' + appProduct?.image}
                                class='img-fluid'
                                alt=''
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='col-lg-6'>
                        <div class='single-product-content-description'>
                          <p class='single-info'>{appProduct?.category}</p>
                          <h4 class='product-title'>{appProduct?.name}</h4>

                          <p class='single-grid-product__price'>
                            <span class='main-price'>
                              {appProduct?.price} руб.
                            </span>
                          </p>

                          <p class='single-info'>
                            Артикул: <span class='value'>{appProduct?.id}</span>
                          </p>
                          <p class='single-info'>
                            В наличии: <span class='value'>Да</span>
                          </p>
                          <p class='single-info'>
                            Цвет: <span class='value'>{appProduct?.color}</span>
                          </p>
                          <p class='single-info'>
                            Размеры:{' '}
                            <span class='value'>{appProduct?.size}</span>
                          </p>
                          <p class='single-info'>
                            Материал:{' '}
                            <span class='value'>{appProduct?.material}</span>
                          </p>

                          <p class='product-description'>
                            {appProduct?.description}
                          </p>

                          <div
                            class='product-countdown'
                            data-countdown='2020/06/01'
                          ></div>

                          <div class='product-actions'>
                            <div class='product-buttons'>
                              <button
                                class='cart-btn'
                                onClick={addToCartProduct}
                              >
                                {' '}
                                <i class='ion-bag'></i>{' '}
                                {isInCart ? 'УДАЛИТЬ' : 'В КОРЗИНУ'}
                              </button>
                              <span
                                class='wishlist-compare-btn'
                                onClick={addToWishListProduct}
                              >
                                <a className={isInFav ? 'active' : ''}>
                                  {' '}
                                  <i class='ion-heart'></i>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='product-description-review-area'>
                    <div class='row'>
                      <div class='col-lg-12'>
                        <div class='tab-slider-wrapper product-description-review-container  section-space--inner'>
                          <nav>
                            <div
                              class='nav nav-tabs justify-content-center'
                              id='nav-tab'
                              role='tablist'
                            >
                              <a
                                class='nav-item nav-link active'
                                id='description-tab'
                                data-toggle='tab'
                                href='single-product.html#product-description'
                                role='tab'
                                aria-selected='true'
                              >
                                Описание
                              </a>
                            </div>
                          </nav>
                          <div class='tab-content' id='nav-tabContent'>
                            <div
                              class='tab-pane fade show active'
                              id='product-description'
                              role='tabpanel'
                              aria-labelledby='description-tab'
                            >
                              <div class='product-description'>
                                <p>{appProduct?.description}</p>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
