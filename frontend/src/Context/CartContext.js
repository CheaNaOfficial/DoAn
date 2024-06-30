import React, { createContext, useState, useContext, useEffect } from 'react';
import { TokenRequest } from '../config/request';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Fetch initial cart count when component mounts
    getNumberCart();
  }, []);

  const addToCart = () => {
    setCartCount(prevCount => parseInt(prevCount) + 1);
  };

  const getNumberCart = async () => {
    try {
      const res = await TokenRequest.get('cart/number');
      setCartCount(res.data.totalQuantity);
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(prevCount => parseInt(prevCount)  - 1);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, setCartCount, removeFromCart ,getNumberCart  }}>
      {children}
    </CartContext.Provider>
  );
};
