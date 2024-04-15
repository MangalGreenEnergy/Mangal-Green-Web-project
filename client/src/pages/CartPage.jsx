import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import { auth } from "../firebase";
import CartData from "./CartData";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch all products
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Fetch cart items for the user (replace 'user_id' with actual user ID)
        const response = await axios.get(`http://localhost:3000/api/cart/${auth.currentUser.uid}`);
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Filter products based on cart items
  const filteredProducts = products.filter(product =>
    cartItems.some(cartItem => cartItem.productID === product._id)
  );

  return (
    <Navbar>
      
      <div className="mt-9 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <CartData/>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <Link to="/checkout">
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
          </Link>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <Link to="/">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default CartPage;
