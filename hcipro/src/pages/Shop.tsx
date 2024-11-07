import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const categories = ['All', 'Indoor', 'Outdoor', 'Succulents', 'Herbs'];
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
  },
  {
    id: 5,
    name: 'Jade Plant',
    price: '₹499',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80',
    category: 'Succulents'
  },
  {
    id: 6,
    name: 'Basil',
    price: '₹299',
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&q=80',
    category: 'Herbs'
  }
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Shop Plants</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search plants..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPlants.map((plant) => (
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
                <button className="mt-3 w-full bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
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