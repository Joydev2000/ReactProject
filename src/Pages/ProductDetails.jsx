import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          ← Back to Products
        </button>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2">
              <img 
                src={product?.imageSrc} 
                alt={product?.imageAlt} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product?.name}
              </h1>
              <p className="text-2xl text-gray-900 mb-8">
                {product?.price}
              </p>
              <p className="text-gray-500 mb-8">
                {product?.imageAlt}
              </p>
              {/* Add more product details as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
