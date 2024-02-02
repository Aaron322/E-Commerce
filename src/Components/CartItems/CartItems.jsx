import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'

export const CartItems = () => {
  const {
    all_product,
    cartItems,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(ShopContext)

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                {/* <button className="cartitems-quanity">{cartItems[e.id]}</button> */}
                <div className="cartitems-quantity-contatiner">
                  <span className="total-quantity">{cartItems[e.id]}</span>
                  <div className="quantity-adjust-buttons">
                    <FontAwesomeIcon
                      icon={faPlusSquare}
                      size="xl"
                      onClick={() => increaseQuantity(e.id)}
                      className="button"
                    />

                    <FontAwesomeIcon
                      size="xl"
                      icon={faMinusSquare}
                      onClick={() => decreaseQuantity(e.id)}
                      className="button"
                    />
                  </div>
                </div>
                <p>${e.new_price * cartItems[e.id]}</p>
                <FontAwesomeIcon
                  className="cartitems-remove-icon"
                  icon={faTrashAlt}
                  onClick={() => {
                    removeFromCart(e.id)
                  }}
                />
              </div>
              <hr />
            </div>
          )
        }
        return null
      })}
      <div className="cartitems-footer">
        <div-caritems-total>
          <h1></h1>
        </div-caritems-total>
      </div>
    </div>
  )
}
