import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-emerald-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Green Community
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for plant care tips, new arrivals, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}