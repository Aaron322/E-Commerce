import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/test_data/data'
import { Item } from '../Item/Item'

export const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>You may also like</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}
