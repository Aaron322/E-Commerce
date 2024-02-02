import { useState } from 'react'
import React, { createContext } from 'react'
import all_product from '../Components/Assets/test_data/all_product'

export const ShopContext = createContext(null)
const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const increaseQuantity = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      // Ensure quantity does not go below 1
      const newQuantity = prev[id] > 1 ? prev[id] - 1 : 1
      return {
        ...prev,
        [id]: newQuantity,
      }
    })
  }
  const contextVale = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  }
  return (
    <ShopContext.Provider value={contextVale}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
