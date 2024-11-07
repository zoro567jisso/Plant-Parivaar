import React from 'react';
import { Truck, Leaf, PhoneCall } from 'lucide-react';

export default function Features() {
  return (
    <div className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-white p-4 rounded-full mb-4">
              <Truck className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
            <p className="text-gray-600">Free shipping on all orders above ₹999</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-white p-4 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Healthy Plants</h3>
            <p className="text-gray-600">All plants are carefully nurtured and healthy</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-white p-4 rounded-full mb-4">
              <PhoneCall className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Expert plant care support whenever you need</p>
          </div>
        </div>
      </div>
    </div>
  );
}