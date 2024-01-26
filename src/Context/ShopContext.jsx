import React, { createContext } from 'react'
import all_product from '../Components/Assets/test_data/all_product'

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
  const contextVale = { all_product }
  return (
    <ShopContext.Provider value={contextVale}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
