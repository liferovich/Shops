import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import OrderItem from "../components/OrderItem";
import { getOrdersById, id, orders } from "../features/AppSlice";
import { Order } from "../models/response/OrderResponse";

const Orders = () => {
    const dispatch = useDispatch<any>();
    const userId = useSelector(id);
    const userOrders = useSelector(orders);

    useEffect(() => {
        dispatch(getOrdersById(userId))
    }, [])

    return (<>
        <div className="breadcrumb-area section-space--half">
            <div className="container wide">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-wrapper breadcrumb-bg">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-content__title">Мои заказы</h2>
                                <ul className="breadcrumb-content__page-map">
                                    <li><NavLink to="/">Главная</NavLink></li>
                                    <li className="active">Мои Заказы</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-content-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-wrapper">
                            <div className="page-content-wrapper">
                                <div className="cart-table table-responsive">
                                    {userOrders.length ? <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>IDs Товаров</th>
                                                <th>Стоимость</th>
                                                <th>Email</th>
                                                <th>ФИО</th>
                                                <th>Телефон</th>
                                                <th>Адрес</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userOrders.map((order: Order) => <OrderItem order={order} key={order.id} />)}
                                        </tbody>
                                    </table> : <p>У вас нет заказов</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>)
}

export default Orders