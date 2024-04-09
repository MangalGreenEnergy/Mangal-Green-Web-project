import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import LoginInPage from './pages/LoginInPage';
import SignUpPage from './pages/SignUpPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
