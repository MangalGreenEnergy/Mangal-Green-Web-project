import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginInPage from './pages/LoginInPage';
import SignUpPage from './pages/SignUpPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductInfo from './pages/ProductInfo';
import ProductDetail from './pages/ProductDetail';
import { auth } from './firebase';

const Router = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {currentUser ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/productinfo/:productId" element={<ProductInfo />} />
            <Route path="/productDetail" element={<ProductDetail />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
