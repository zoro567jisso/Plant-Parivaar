import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CareGuide from './pages/CareGuide';
import About from './pages/About';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="care-guide" element={<CareGuide />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}