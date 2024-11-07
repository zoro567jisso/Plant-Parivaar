import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { state } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Plant Parivaar</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-emerald-600">Shop</Link>
            <Link to="/care-guide" className="text-gray-700 hover:text-emerald-600">Care Guide</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/shop')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <Link 
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {state.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-emerald-500 rounded-full text-xs text-white flex items-center justify-center">
                  {state.totalItems}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link
                to="/care-guide"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Care Guide
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}