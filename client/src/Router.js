import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginInPage from './pages/LoginInPage';
import SignUpPage from './pages/SignUpPage';
import { auth } from './firebase'; // Import only auth from firebase

const Router = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {currentUser ? (
          <Route path="/" element={<Home />} />
        ) : (
          <>
            <Route path="/" element={<LoginInPage />} />
            <Route path="/signup" element={<SignUpPage />} />          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
