import { NavLink } from "react-router-dom";
import { Product } from "../models/response/ProductResponse";
import { useDispatch, useSelector } from 'react-redux'
import {
    addCart,
    addWishList,
    cart,
    wishlist
} from '../features/AppSlice'
import { useEffect, useState } from "react";

const ProductItem = ({ product }: { product: Product }) => {
    const [isInCart, setIsInCart] = useState(false);
    const [isInFav, setIsInFav] = useState(false);
    const appWishlist = useSelector(wishlist);
    const appCart = useSelector(cart);

    const dispatch = useDispatch();

    const addToCartProduct = () => {
        setIsInCart(!isInCart);
        dispatch(addCart(product))
    }

    const addToWishListProduct = () => {
        setIsInFav(!isInFav);
        dispatch(addWishList(product))
    }

    useEffect(() => {
        const index = appCart.findIndex((x:Product) => x.id == product.id);
        if (index !== -1) setIsInCart(true);
    }, [appCart])

    useEffect(() => {
        const index = appWishlist.findIndex((x:Product) => x.id == product.id);
        if (index !== -1) setIsInFav(true);
    }, [appWishlist])

    return (<>
        <div className="col-6 col-md-4 tt-col-item">
            <div className="tt-product">
                <div className="tt-product__img">
                    <NavLink to={"/product/" + product.id}>
                        <img src={"../" + product.image} alt="" />
                    </NavLink>
                </div>
                <div className="tt-product__description">
                    <h2 className="tt-product__title">
                        <NavLink to={"/product/" + product.id}>{product.name}</NavLink>
                    </h2>
                    <div className="tt-price">{product.price} руб.</div>
                    <div className="tt-row-btn">
                        <button className="tt-btn-addtocart" onClick={addToCartProduct}><i
                            className="tt-icon icon-808584"></i>{isInCart ? 'удалить' : 'в корзину'}</button>
                        <button className="tt-btn-addtocart" onClick={addToWishListProduct}>
                            <i className="tt-icon  icon-favorite"></i>{isInFav ? 'удалить' : 'в избранное'}
                        </button>
                    </div>
                </div>
            </div>
        </div></>)
}

export default ProductItem;