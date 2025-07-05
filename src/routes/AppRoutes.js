import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Order from '../pages/Order';
import Cart from '../pages/Cart';
import AdminOrders from '../pages/AdminOrders'; // ✅ Admin Dashboard

const AppRoutes = ({ addToCart, cart, updateQty, removeFromCart }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products addToCart={addToCart} />} />
    <Route
      path="/cart"
      element={
        <Cart
          cart={cart}
          updateQty={updateQty}
          removeFromCart={removeFromCart}
        />
      }
    />
    <Route
      path="/order"
      element={
        <Order
          cart={cart}
          updateQty={updateQty}
          removeFromCart={removeFromCart}
        />
      }
    />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    
    {/* ✅ Admin route */}
    <Route path="/admin/orders" element={<AdminOrders />} />
  </Routes>
);

export default AppRoutes;
