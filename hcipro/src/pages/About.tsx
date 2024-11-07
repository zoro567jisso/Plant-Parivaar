import React from 'react';
import { Heart, Users, Sprout } from 'lucide-react';

export default function About() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Plant Parivaar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a plant shop - we're a community of plant lovers dedicated to bringing the joy of gardening to every home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">To make plant parenting easy and enjoyable for everyone, while promoting sustainable living.</p>
          </div>

          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">A passionate group of horticulturists and plant enthusiasts dedicated to helping you succeed.</p>
          </div>

          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sprout className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
            <p className="text-gray-600">Quality plants, expert care advice, and outstanding customer service, always.</p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Founded in 2024, Plant Parivaar began with a simple idea: to make the joy of plants accessible to everyone. What started as a small passion project has grown into a thriving community of plant lovers.
            </p>
            <p className="mb-4">
              We carefully source our plants from sustainable nurseries and work closely with local growers to ensure the highest quality. Each plant in our collection is hand-picked and nurtured before making its way to your home.
            </p>
            <p>
              Today, we're proud to have helped thousands of customers create their own green sanctuaries. Our commitment to quality, sustainability, and customer satisfaction remains at the heart of everything we do.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Store</h2>
          <p className="text-gray-600 mb-4">
            123 Green Street<br />
            Bangalore, Karnataka<br />
            India
          </p>
          <p className="text-gray-600">
            Monday - Saturday: 10:00 AM - 7:00 PM<br />
            Sunday: 11:00 AM - 5:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}