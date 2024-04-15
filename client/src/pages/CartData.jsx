import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import { auth } from "../firebase";

const CartData = () => {
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
 
  const handleRemoveCartItem = async (cartID) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/cart/${cartID}`);
      console.log('Item removed successfully:', response.data);
      // Refresh the page after item is removed
      window.location.reload();
    } catch (error) {
      console.error('Error removing item:', error);
      // Handle error cases here
    }
  };
  

  const filteredCarts = cartItems.map(cartItem => ({
    ...products.find(product => product._id === cartItem.productID),
    cart_ID:cartItem._id
    
  }));
  
  
  

  return (
  
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
            All Selected Items
          </h1>
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {filteredCarts.map((product) => (
                <li key={product._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.Thumbnail}
                      alt={product.Name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to={`/product/${product._id}`}>{product.Name}</Link>
                        </h3>
                        <p className="ml-4">${product.Price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Category: {product.Category}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor="quantity"
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                        >
                          Qty
                        </label>
                        <select value={1}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      <div className="flex">
                      <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => handleRemoveCartItem(product.cart_ID)}
                    >
                      Remove
                    </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

  );
};

export default CartData;
