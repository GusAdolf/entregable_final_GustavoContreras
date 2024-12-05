import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext); 
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const [feedback, setFeedback] = useState(""); 

  // Agregar producto al carrito
  const addToCart = (item) => {
    setCart((prevCart) => {
      
      const existingItem = prevCart.find((product) => product.id === item.id);
      if (existingItem) {
        setFeedback(`${item.name} is already in the cart.`);
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      // Si no está, agregarlo con cantidad inicial 1
      setFeedback(`${item.name} added to cart!`);
      return [...prevCart, { ...item, quantity: 1 }];
    });

    // Limpiar el mensaje de feedback después de 3 segundos
    setTimeout(() => setFeedback(""), 3000);
  };

  // Eliminar producto por ID
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id) 
    );
    setFeedback("Product removed from cart.");
    setTimeout(() => setFeedback(""), 3000);
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]); 
    setFeedback("Cart cleared.");
    setTimeout(() => setFeedback(""), 3000);
  };

  // Reducir cantidad de un producto
  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0); 

      if (updatedCart.length < prevCart.length) {
        setFeedback("Product removed from cart.");
      } else {
        setFeedback("Product quantity decreased.");
      }
      setTimeout(() => setFeedback(""), 3000);

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseQuantity,
        feedback, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
