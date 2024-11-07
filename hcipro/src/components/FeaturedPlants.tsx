import React from 'react';
import { useCart } from '../context/CartContext';

const plants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: '₹899',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80',
    category: 'Indoor'
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&q=80',
    category: 'Indoor'
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: '₹699',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&q=80',
    category: 'Indoor'
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: '₹1299',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207517?auto=format&fit=crop&q=80',
    category: 'Indoor'
  }
];

export default function FeaturedPlants() {
  const { dispatch } = useCart();

  const handleAddToCart = (plant: typeof plants[0]) => {
    dispatch({ type: 'ADD_TO_CART', payload: plant });
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Plants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plants.map((plant) => (
            <div key={plant.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                    {plant.category}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{plant.name}</h3>
                <p className="text-emerald-600 font-semibold mt-1">{plant.price}</p>
                <button 
                  onClick={() => handleAddToCart(plant)}
                  className="mt-3 w-full bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}