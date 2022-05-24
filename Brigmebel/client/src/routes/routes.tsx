import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import HomePage from '../pages/HomePage';
import Product from '../pages/Product';
import WishList from '../pages/WishList';
import News from '../pages/News';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Register from '../pages/Register';
import Category from '../pages/Category';
import Orders from '../pages/Orders';
import About1 from '../pages/About1';
import About2 from '../pages/About2';
import About3 from '../pages/About3';

export function useRoutes(authenticated: boolean) {
    if (authenticated) {
        return (
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/category' element={<Category />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<WishList />} />
                <Route path='/news' element={<News />} />
                <Route path='/about' element={<About />} />
                <Route path='/about/about1' element={<About1 />} />
                <Route path='/about/about2' element={<About2 />} />
                <Route path='/about/about3' element={<About3 />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/register' element={<Navigate to='/orders' />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/category' element={<Category />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/news' element={<News />} />
            <Route path='/about' element={<About />} />
            <Route path='/about/about1' element={<About1 />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/register' element={<Register />} />            
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}
