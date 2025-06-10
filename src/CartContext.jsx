import React from 'react'
import { useContext, createContext, useState } from 'react'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    
    function addToCart(product) {
        setCart([...prevCart, product])
    }

  return (
  <CartContext.Provider value={{ cart, addToCart }}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider