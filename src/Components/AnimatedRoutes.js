import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login';
import Register from './pages/register';
import Cart from './pages/cart/Cart';
import Showcase from './pages/showcase/Showcase';



function AnimatedRoutes({cart, handleAddProduct, handleRemoveProduct, handleClearCart, handleClearProduct}) {
    const location = useLocation();
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/showcase" element={<Showcase cart={cart} handleAddProduct={handleAddProduct}/>} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/users/cart" element={<Cart cart={cart} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearCart={handleClearCart} handleClearProduct={handleClearProduct}/>} />
            <Route path="/users/login" element={<Login />} />
        </Routes>
    )
}

export default AnimatedRoutes