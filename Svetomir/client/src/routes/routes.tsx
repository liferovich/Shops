import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import CategoryNeon from '../pages/categories/CategoryNeon';
import CategoryString from '../pages/categories/CategoryString';
import Catalog from '../pages/Catalog';
import HomePage from '../pages/HomePage';
import Product from '../pages/Product';
import WishList from '../pages/WishList';
import CategoryLed from '../pages/categories/CategoryLed';
import News from '../pages/News';
import About from '../pages/About';
import Contacts from '../pages/Contacts';

export function useRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/neon' element={<CategoryNeon />} />
            <Route path='/catalog/string' element={<CategoryString />} />
            <Route path='/catalog/led' element={<CategoryLed />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/news' element={<News />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
}
