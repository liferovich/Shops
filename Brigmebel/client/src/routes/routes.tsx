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

export function useRoutes() {
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
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}
