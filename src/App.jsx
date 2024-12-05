import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import CharacterDetails from "./pages/character/CharacterDetails";
import { CartProvider } from "./context/CartContext"; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
