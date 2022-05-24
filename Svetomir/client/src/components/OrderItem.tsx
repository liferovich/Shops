import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { deleteCart } from '../features/AppSlice'
import { Order } from '../models/response/OrderResponse';

const OrderItem = ({ order }: { order: Order }) => {

    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.products.map((id: number)=> <span key={id}>{id}</span>)}</td>
            <td>{order.total} руб.</td>
            <td>{order.email}</td>
            <td>{order.receiver}</td>
            <td>{order.phone}</td>
            <td>{order.index}, г. {order.city}, ул. {order.street}, д. {order.build}{order.flat && `, кв. ${order.flat}`}</td>
        </tr>
    )
}

export default OrderItem;