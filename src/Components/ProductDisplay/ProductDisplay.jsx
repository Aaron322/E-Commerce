import React from 'react'
import './ProductDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <FontAwesomeIcon icon={faStar} style={{ color: 'red' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: 'red' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: 'red' }} />
          <FontAwesomeIcon icon={faStar} style={{ color: 'red' }} />
          <FontAwesomeIcon icon={farStar} style={{ color: 'red' }} />
          <p>(100)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-discription">
          Ex commodo velit consectetur ex proident duis ullamco aute culpa minim
          duis duis aute. Qui nisi fugiat sint ipsum. Id ullamco
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id)
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women. T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tag: </span>Modern,
        </p>
      </div>
    </div>
  )
}
