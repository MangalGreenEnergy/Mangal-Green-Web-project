import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import Navbar from '../features/navbar/Navbar';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    // Fetch product data from API using productId
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Navbar>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {/* Breadcrumbs */}
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  {product.Category}
                </a>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  {product.Brand}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            {product.images.map((image, index) => (
              <div key={index} className={`aspect-h-4 aspect-w-3 ${index === 0 ? 'hidden' : 'lg:block'}`}>
                <img src={image} alt={`Product Image ${index + 1}`} className="h-full w-full object-cover object-center" />
              </div>
            ))}
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.Name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${product.Price}</p>

              <form className="mt-10">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description */}
              <div>
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-900">{product.Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ProductInfo;
