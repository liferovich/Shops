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
        const index = appCart.findIndex((x: Product) => x.id == product.id);
        if (index !== -1) setIsInCart(true);
    }, [appCart])

    useEffect(() => {
        const index = appWishlist.findIndex((x: Product) => x.id == product.id);
        if (index !== -1) setIsInFav(true);
    }, [appWishlist])

    return (<>
        <div className='col-12 col-lg-4 col-md-4 col-sm-6'>
            <div className='single-grid-product grid-view-product'>
                <div className='single-grid-product__image'>
                    <NavLink to={"/product/" + product.id}>
                        <img
                            src={product.image}
                            className='img-fluid'
                            alt=''
                        />
                    </NavLink>

                    <div className='hover-icons'>
                        <a className={isInCart? 'active': ''} onClick={addToCartProduct}>
                            <i className='ion-bag'></i>
                        </a>
                        <a className={isInFav? 'active': ''} onClick={addToWishListProduct}>
                            <i className='ion-heart'></i>
                        </a>
                        <NavLink to={"/product/" + product.id}
                        >
                            <i className='ion-android-open'></i>
                        </NavLink>
                    </div>
                </div>
                <div className='single-grid-product__content'>
                    <div className='single-grid-product__category-rating'>
                        <span className='category'>
                                {product.category}
                        </span>
                    </div>

                    <h3 className='single-grid-product__title'>
                        <NavLink to={"/product/" + product.id}>{product.name}</NavLink>
                    </h3>
                    <p className='single-grid-product__price'>
                        <span className='main-price'>{product.price} руб.</span>
                    </p>
                </div>
            </div>
        </div>
    </>)
}

export default ProductItem;