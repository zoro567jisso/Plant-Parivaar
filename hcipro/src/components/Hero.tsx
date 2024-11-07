import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-emerald-50 h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Bring Nature Home with Our Beautiful Plants
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your space into a green sanctuary with our carefully curated collection of indoor and outdoor plants.
          </p>
          <button 
            onClick={() => navigate('/shop')}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors flex items-center"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}