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
            <td className='pro-thumbnail'>
                <NavLink to={"/product/" + product.id}>
                    <img
                        src={product.image}
                        className='img-fluid'
                        alt='Product'
                    />
                </NavLink>
            </td>
            <td className='pro-title'>
                <NavLink to={"/product/" + product.id}>
                    {product.name}
                </NavLink>
            </td>
            <td className='pro-price'>
                <span>{product.price} руб.</span>
            </td>
            <td className='pro-remove'>
                <a onClick={deleteFromCart}>
                    <i className='fa fa-trash-o'></i>
                </a>
            </td>
        </tr>
    )
}

export default CartItem;