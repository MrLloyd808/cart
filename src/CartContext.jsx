import React from 'react'
import { useContext, createContext, useState } from 'react'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
   
    const addToCart = (product) => {
    setCart((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }

  return (
  <CartContext.Provider value={{ cart, addToCart }}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider