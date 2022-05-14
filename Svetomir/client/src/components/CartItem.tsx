import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { deleteCart } from '../features/AppSlice'
import { Product } from "../models/response/ProductResponse";

const CartItem = ({ product }: { product: Product }) => {
    const dispatch = useDispatch()

    const deleteFromCart = () => {
        dispatch(deleteCart(product))
    }

    return (
        <tr>
            <td>
                <div>
                    <NavLink to={"/product/" + product.id}><img src={product.image} className="cart_img" /></NavLink>
                </div>
            </td>
            <td>
                <NavLink to={"/product/" + product.id}>{product.name}</NavLink>
                <p>Стоимость: {product.price} руб.</p>
            </td>
            <td>
                <ul className='tt-list01 tt-list-top'>
                    <li>Цвет: {product.color}</li>
                    <li>Мощность: {product.force} Вт/м</li>
                    <li>Размер упаковки: {product.size} см</li>
                    <li>Вес упаковки: {product.weight} кг</li>
                </ul>
            </td>
            <td>
                <div>
                    <a className="tt-item__remove icon-rubbish-bin-delete-button" onClick={deleteFromCart}></a>
                </div>
            </td>
        </tr>
    )
}

export default CartItem;