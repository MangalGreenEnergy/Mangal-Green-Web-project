// import React from 'react'
// import Navbar from '../features/navbar/Navbar'
// import ProductList from '../features/product-list/ProductList'
// const Home = () => {
//   return (
//     <Navbar>
//         <ProductList/>
//     </Navbar>
//   )
// }

// export default Home
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import your firebase configuration

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

  return (
    <div>
      {isEmailVerified ? (
        <p>Your email is verified.</p>
      ) : (
        <p>Your email is not verified. Please check your inbox for a verification email.</p>
      )}
    </div>
  );
};

export default Home;
