import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-semibold text-white">Plant Parivaar</span>
            </div>
            <p className="text-sm">
              Making your space greener, one plant at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-500">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500">Plant Care</a></li>
              <li><a href="#" className="hover:text-emerald-500">FAQs</a></li>
              <li><a href="#" className="hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Green Street</li>
              <li>Bangalore, Karnataka</li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: hello@plantparivaar.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© 2024 Plant Parivaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}