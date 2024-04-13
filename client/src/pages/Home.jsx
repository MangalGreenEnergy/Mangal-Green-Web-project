import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import your firebase configuration
import Navbar from '../features/navbar/Navbar';
import ProductList from '../features/product-list/ProductList';

const Home = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  useEffect(() => {
    const checkEmailVerification = () => {
      const user = auth.currentUser;
      if (user) {
        setIsEmailVerified(user.emailVerified);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(checkEmailVerification);

    return () => unsubscribe();
  }, []);

  const handleVerification = () => {
    const user = auth.currentUser;
    if (user) {
      user.sendEmailVerification()
        .then(() => {
          alert('Verification email sent. Please check your inbox.');
        })
        .catch(error => {
          console.error('Error sending verification email:', error);
        });
    }
  };

  return (
    <Navbar>
      <ProductList />
      {!isEmailVerified && (
        <div>
          <p>Your email is not verified. Please check your inbox for a verification email.</p>
          <button onClick={handleVerification}>Resend Verification Email</button>
        </div>
      )}
    </Navbar>
  );
};

export default Home;
