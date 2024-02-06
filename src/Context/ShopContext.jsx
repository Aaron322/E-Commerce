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
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      // Check if the quantity is greater than 0
      if (quantity > 0) {
        // Update the quantity for the given product ID
        return { ...prevItems, [productId]: quantity }
      } else {
        // If the quantity is 0 or less, consider removing the item from the cart
        // This step is optional based on your application's requirements
        const updatedItems = { ...prevItems }
        delete updatedItems[productId]
        return updatedItems
      }
    })
  }
  const getTotalAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        )
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount
  }

  const getTotalQuantity = () => {
    let totalItem = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem
  }
  const contextVale = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalAmount,
    getTotalQuantity,
    updateQuantity,
  }
  return (
    <ShopContext.Provider value={contextVale}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
