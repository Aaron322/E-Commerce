import { useEffect, useState } from 'react'
import React, { createContext } from 'react'

export const ShopContext = createContext(null)
const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([])
  const [cartItems, setCartItems] = useState(getDefaultCart())
  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => {
        setAllProduct(data)
      })
  }, [])
  //auto fetch all products from
  //user dont need to refresh to get the updated products
  useEffect(() => {
    // Create WebSocket connection.
    const ws = new WebSocket('ws://localhost:8080')

    // Connection opened
    ws.onopen = () => {
      console.log('Connected to WS Server')
    }

    // Listen for messages
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data)
      console.log('Message from server ', message)

      // Assuming the server sends an object with a type property
      switch (message.type) {
        case 'new-product':
          // Assuming message.data contains the new product
          setAllProduct((prevProducts) => [...prevProducts, message.data])
          break
        case 'update-product':
          // If the message is to update a product, find it by id and update
          setAllProduct((prevProducts) =>
            prevProducts.map((product) =>
              product.id === message.data.id
                ? { ...product, ...message.data }
                : product
            )
          )
          break
        default:
          console.log('Unhandled message type:', message.type)
      }
    }

    // Listen for possible errors
    ws.onerror = (error) => {
      console.error('WebSocket error: ', error)
    }

    // Cleanup on component unmount
    return () => ws.close()
  }, []) // Empty dependency array means this effect runs only once on mount
  // Empty dependency array means this effect runs only once on mount

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
