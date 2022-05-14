import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { addOrder, cart, orderCost } from '../features/AppSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(cart)
  const totalOrderCost = useSelector(orderCost)
  const ids = cartProducts.map(product => product.id)
  const [data, setData] = useState({
    products: ids,
    total: totalOrderCost,
    email: '',
    receiver: '',
    phone: '',
    comment: '',
    index: '',
    city: '',
    street: '',
    build: '',
    flat: '',
    payment: 'Карта',
    delivery: 'Почта'
  })

  const sendProductOrder = e => {
    e.preventDefault()
    dispatch(addOrder(data))
  }

  const changeHandler = e => {
    const name = e.target.name
    setData({ ...data, [`${name}`]: e.target.value })
  }

  return (
    <>
      <div className='breadcrumb-area section-space--half'>
        <div className='container wide'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='breadcrumb-wrapper breadcrumb-bg'>
                <div className='breadcrumb-content'>
                  <h2 className='breadcrumb-content__title'>Корзина</h2>
                  <ul className='breadcrumb-content__page-map'>
                    <li>
                      <NavLink to='/'>Главная</NavLink>
                    </li>
                    <li className='active'>Корзина</li>
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
                {cartProducts.length ? (
                  <div className='page-content-wrapper'>
                    <div className='cart-table table-responsive'>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th className='pro-thumbnail'></th>
                            <th className='pro-title'>Наименование</th>
                            <th className='pro-price'>Цена</th>
                            <th className='pro-remove'>Удалить</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartProducts.map(product => (
                            <CartItem product={product} key={product.id} />
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className='order calculate-shipping'>
                      <form
                        className='order-form form-default'
                        id='formOrder'
                        onSubmit={sendProductOrder}
                      >
                        <div className='row'>
                          <div className='col-12 col-md-6'>
                            <h4>Данные получателя:</h4>
                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                Email <span className='required-star'>*</span>
                              </label>
                              <div className='col-md-8'>
                                <input
                                  type='text'
                                  id='email'
                                  name='email'
                                  value={data.email}
                                  className='form-control'
                                  required
                                  onChange={changeHandler}
                                />
                              </div>
                            </div>
                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                ФИО <span className='required-star'>*</span>
                              </label>
                              <div className='col-md-8'>
                                <input
                                  type='text'
                                  id='receiver'
                                  name='receiver'
                                  value={data.receiver}
                                  className='form-control'
                                  required
                                  onChange={changeHandler}
                                />
                              </div>
                            </div>
                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                Телефон <span className='required-star'>*</span>
                              </label>
                              <div className='col-md-8'>
                                <input
                                  type='text'
                                  id='phone'
                                  name='phone'
                                  value={data.phone}
                                  className='form-control'
                                  required
                                  onChange={changeHandler}
                                />
                              </div>
                            </div>

                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                Камментарии
                              </label>
                              <div className='col-md-8'>
                                <textarea
                                  name='comment'
                                  id='comment'
                                  className='form-control'
                                  value={data.comment}
                                  onChange={changeHandler}
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className='col-12 col-md-6'>
                            <h4>Адрес доставки:</h4>

                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                Индекс <span className='required-star'>*</span>
                              </label>
                              <div className='col-md-8'>
                                <input
                                  type='text'
                                  id='index'
                                  name='index'
                                  value={data.index}
                                  className='form-control'
                                  onChange={changeHandler}
                                  required
                                />
                              </div>
                            </div>
                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                Город <span className='required-star'>*</span>
                              </label>
                              <div className='col-md-8'>
                                <input
                                  type='text'
                                  id='city'
                                  name='city'
                                  value={data.city}
                                  className='form-control'
                                  onChange={changeHandler}
                                  required
                                />
                              </div>
                            </div>
                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                Улица <span className='required-star'>*</span>
                              </label>
                              <div className='col-md-8'>
                                <input
                                  type='text'
                                  id='street'
                                  name='street'
                                  value={data.street}
                                  className='form-control'
                                  onChange={changeHandler}
                                  required
                                />
                              </div>
                            </div>
                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                Дом <span className='required-star'>*</span>
                              </label>
                              <div className='col-md-8'>
                                <input
                                  type='text'
                                  id='build'
                                  name='build'
                                  value={data.build}
                                  className='form-control'
                                  onChange={changeHandler}
                                  required
                                />
                              </div>
                            </div>
                            <div className='form-group row input-parent'>
                              <label className='col-md-4 col-form-label'>
                                Квартира <span className='required-star'></span>
                              </label>
                              <div className='col-md-8'>
                                <input
                                  type='text'
                                  id='flat'
                                  name='flat'
                                  value={data.flat}
                                  className='form-control'
                                  onChange={changeHandler}
                                />
                              </div>
                            </div>
                          </div>

                          <div className='col-12 col-md-6' id='payments'>
                            <h4>Способ оплаты:</h4>
                            <div className='form-group row'>
                              <div className='col-12 custom-checkbox'>
                                <label className='container-check'>
                                  Картой
                                  <input
                                    type='radio'
                                    name='payment'
                                    value='Карта'
                                    id='payment_01'
                                    onChange={changeHandler}
                                    checked={data.payment === 'Карта'}
                                  />
                                  <span className='checkmark'></span>
                                </label>
                              </div>
                              <div className='col-12 custom-checkbox'>
                                <label className='container-check'>
                                  Наличными
                                  <input
                                    type='radio'
                                    name='payment'
                                    value='Наличные'
                                    id='payment_02'
                                    onChange={changeHandler}
                                    checked={data.payment === 'Наличные'}
                                  />
                                  <span className='checkmark'></span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className='col-12 col-md-6' id='deliveries'>
                            <h4>Способ доставки:</h4>
                            <div className='form-group row'>
                              <div className='col-12 custom-checkbox'>
                                <label className='container-check'>
                                  Почтой
                                  <input
                                    type='radio'
                                    name='delivery'
                                    value='Почта'
                                    id='delivery_01'
                                    onChange={changeHandler}
                                    checked={data.delivery === 'Почта'}
                                  />
                                  <span className='checkmark'></span>
                                </label>
                              </div>
                              <div className='col-12 custom-checkbox'>
                                <label className='container-check'>
                                  Курьером
                                  <input
                                    type='radio'
                                    name='delivery'
                                    value='Курьер'
                                    id='delivery_02'
                                    onChange={changeHandler}
                                    checked={data.delivery === 'Курьер'}
                                  />
                                  <span className='checkmark'></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr className='mt-4 mb-4' />

                        <div className='d-flex flex-column align-items-md-end justify-content-center'>
                          <div>
                            <h3 className='mb-md-0'>
                              Стоимость заказа:{' '}
                              <span id='ms2_order_cost'>{totalOrderCost}</span>{' '}
                              руб.
                            </h3>
                          </div>
                          <div className='mt-4'>
                            <input
                              type='submit'
                              name='ms2_action'
                              className='tt-btn btn__color01 cart-btn'
                              value="Заказать"
                            />                              
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                ) : (
                  <p>Корзина пуста</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
