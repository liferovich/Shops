import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { addOrder, cart, orderCost } from '../features/AppSlice'

const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(cart)
    const totalOrderCost = useSelector(orderCost)
    const ids = cartProducts.map((product) => product.id);
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
    });

    const sendProductOrder = (e) => {
        e.preventDefault();
        dispatch(addOrder(data))
    }

    const changeHandler = (e) => {
        const name = e.target.name;
        setData({ ...data, [`${name}`]: e.target.value })
    }

    return (
        <>
            <div className='tt-breadcrumb'>
                <div className='container container-lg-fluid'>
                    <ul>
                        <li>
                            <NavLink to='/'>Главная</NavLink>
                        </li>
                        <li>Корзина</li>
                    </ul>
                </div>
            </div>
            <div className='section-indent'>
                <div className='container container-lg-fluid'>
                    {cartProducts.length ? (<div className="cart__inner">
                        <div className="products tt-table01 tt-table-responsive-md">
                            <table className='cart-table' id='cartTable'>
                                <tr>
                                    <th></th>
                                    <th>Наименование</th>
                                    <th>Характеристики</th>
                                    <th>Удалить</th>
                                </tr>
                                {cartProducts.map((product) => <CartItem product={product} key={product.id} />)}
                            </table>
                        </div>
                        <div className="order">
                            <form className='order-form form-default' id="formOrder" onSubmit={sendProductOrder}>
                                <div className="row">

                                    <div className="col-12 col-md-6">
                                        <h4>Данные получателя:</h4>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Email <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="email"
                                                    name="email" value={data.email}
                                                    className="form-control" required
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                ФИО <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="receiver"
                                                    name="receiver" value={data.receiver}
                                                    className="form-control" required
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Телефон <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="phone"
                                                    name="phone" value={data.phone}
                                                    className="form-control" required
                                                    onChange={changeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Камментарии
                                            </label>
                                            <div className="col-md-8">
                                                <textarea name="comment" id="comment" className="form-control" value={data.comment} onChange={changeHandler}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <h4>Адрес доставки:</h4>

                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Индекс <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="index" name="index" value={data.index} className="form-control" onChange={changeHandler} required />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Город <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="city" name="city" value={data.city} className="form-control" onChange={changeHandler} required />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Улица <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="street" name="street" value={data.street} className="form-control" onChange={changeHandler} required />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Дом <span className="required-star">*</span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="build" name="build" value={data.build} className="form-control" onChange={changeHandler} required />
                                            </div>
                                        </div>
                                        <div className="form-group row input-parent">
                                            <label className="col-md-4 col-form-label">
                                                Квартира <span className="required-star"></span>
                                            </label>
                                            <div className="col-md-8">
                                                <input type="text" id="flat" name="flat" value={data.flat} className="form-control" onChange={changeHandler} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6" id="payments">
                                        <h4>Способ оплаты:</h4>
                                        <div className="form-group row">
                                            <div className="col-12 custom-checkbox">
                                                <label className='container-check'>
                                                    Картой
                                                    <input type="radio" name="payment" value="Карта" id="payment_01" onChange={changeHandler} checked={data.payment === 'Карта'} />
                                                    <span className='checkmark'></span>
                                                </label>
                                            </div>
                                            <div className="col-12 custom-checkbox">
                                                <label className='container-check'>
                                                    Наличными
                                                    <input type="radio" name="payment" value="Наличные" id="payment_02" onChange={changeHandler} checked={data.payment === 'Наличные'} />
                                                    <span className='checkmark'></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6" id="deliveries">
                                        <h4>Способ доставки:</h4>
                                        <div className="form-group row">
                                            <div className="col-12 custom-checkbox">
                                                <label className='container-check'>
                                                    Почтой
                                                    <input type="radio" name="delivery" value="Почта" id="delivery_01" onChange={changeHandler} checked={data.delivery === 'Почта'} />
                                                    <span className='checkmark'></span>
                                                </label>
                                            </div>
                                            <div className="col-12 custom-checkbox">
                                                <label className='container-check'>
                                                    Курьером
                                                    <input type="radio" name="delivery" value="Курьер" id="delivery_02" onChange={changeHandler} checked={data.delivery === 'Курьер'} />
                                                    <span className='checkmark'></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                                <hr className="mt-4 mb-4" />

                                <div className="d-flex flex-column align-items-md-end justify-content-center">
                                    <div><h3 className="mb-md-0">Стоимость заказа: <span id="ms2_order_cost">{totalOrderCost}</span> руб.</h3></div>
                                    <div><button type="submit" name="ms2_action" className="tt-btn btn__color01">
                                        Заказать
                                    </button></div>
                                </div>

                            </form>
                        </div>
                    </div>) : <p>Корзина пуста</p>}

                </div>
            </div >
        </>
    )
}

export default Cart;