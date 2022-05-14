import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import WishlistItem from '../components/WishlistItem'
import { wishlist } from '../features/AppSlice'
import { Product } from '../models/response/ProductResponse'

const WishList = () => {
    const wishListProducts = useSelector(wishlist)

    return (
        <>
            <div className='breadcrumb-area section-space--half'>
                <div className='container wide'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='breadcrumb-wrapper breadcrumb-bg'>
                                <div className='breadcrumb-content'>
                                    <h2 className='breadcrumb-content__title'>Избранное</h2>
                                    <ul className='breadcrumb-content__page-map'>
                                        <li>
                                            <NavLink to='/'>Главная</NavLink>
                                        </li>
                                        <li className='active'>Избранное</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page-content-area'>
                <div className='container'>
                    <div className='shop-page-content'>
                        <div className='row shop-product-wrap grid three-column'>
                            {wishListProducts.length ? (
                                wishListProducts.map((product: Product) => <WishlistItem product={product} key={product.id} />)
                            ) : <p>Товаров в избранном нет</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList;