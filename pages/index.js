import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  // Mock product data
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      image: 'https://placehold.co/300x300/e2e8f0/64748b?text=Headphones',
      rating: 4.8,
      reviews: 128
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 249.99,
      image: 'https://placehold.co/300x300/e2e8f0/64748b?text=Watch',
      rating: 4.6,
      reviews: 94
    },
    {
      id: 3,
      name: 'Wireless Charging Pad',
      price: 49.99,
      image: 'https://placehold.co/300x300/e2e8f0/64748b?text=Charger',
      rating: 4.5,
      reviews: 67
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 89.99,
      image: 'https://placehold.co/300x300/e2e8f0/64748b?text=Speaker',
      rating: 4.7,
      reviews: 142
    },
    {
      id: 5,
      name: 'Gaming Keyboard',
      price: 129.99,
      image: 'https://placehold.co/300x300/e2e8f0/64748b?text=Keyboard',
      rating: 4.9,
      reviews: 210
    },
    {
      id: 6,
      name: 'Portable SSD 1TB',
      price: 159.99,
      image: 'https://placehold.co/300x300/e2e8f0/64748b?text=Storage',
      rating: 4.7,
      reviews: 89
    }
  ];

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    // In a real app, we would add the product to cart
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Elegant Commerce | Premium Shopping Experience</title>
        <meta name="description" content="Premium e-commerce shopping experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <h1 className="text-2xl font-bold text-indigo-600">Elegant<span className="text-gray-900">Commerce</span></h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Categories</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Deals</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <div className="relative">
              <button className="text-gray-700 hover:text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Products, Exceptional Value</h1>
              <p className="text-xl mb-8 opacity-90">Discover our curated collection of high-quality products designed to elevate your lifestyle.</p>
              <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <a href="#" className="text-indigo-600 hover:underline font-medium">View All</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-contain rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
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
                    <span className="ml-2 text-gray-600">{product.rating} ({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Electronics', 'Fashion', 'Home & Garden', 'Sports'].map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Subscribe to receive updates, special offers, and exclusive discounts.</p>
            <div className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-black transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-indigo-400">ElegantCommerce</h3>
              <p className="text-gray-400">Premium products for a premium lifestyle. Quality guaranteed.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">All Products</a></li>
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Commerce St.</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2026 ElegantCommerce. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}