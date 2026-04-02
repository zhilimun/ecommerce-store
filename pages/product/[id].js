import { useState } from 'react';
import Head from 'next/head';

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Mock product data
  const product = {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design for extended listening sessions.',
    price: 199.99,
    images: [
      'https://placehold.co/600x600/e2e8f0/64748b?text=Main+Image',
      'https://placehold.co/600x600/e2e8f0/64748b?text=Side+View',
      'https://placehold.co/600x600/e2e8f0/64748b?text=Closed+View'
    ],
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.2',
      'Comfortable over-ear design',
      'Quick charge: 5 min = 3 hours',
      'Premium materials'
    ],
    rating: 4.8,
    reviews: 128
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{product.name} | Elegant Commerce</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-indigo-600">Home</a></li>
            <li>/</li>
            <li><a href="/products" className="hover:text-indigo-600">Products</a></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
            {/* Product Images */}
            <div>
              <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-96">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="max-h-80 object-contain"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((img, idx) => (
                  <div 
                    key={idx}
                    className={`bg-gray-100 rounded-lg p-2 cursor-pointer ${selectedImage === idx ? 'ring-2 ring-indigo-500' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img 
                      src={img} 
                      alt={`Product view ${idx + 1}`} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</div>

              <p className="text-gray-700 mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                
                <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4">
                  <img 
                    src={`https://placehold.co/300x300/e2e8f0/64748b?text=Product+${id}`} 
                    alt={`Related product ${id}`} 
                    className="w-full h-48 object-contain rounded-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">Related Product {id}</h3>
                  <p className="text-indigo-600 font-bold mt-2">$79.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}