import React from 'react'
import './ProductDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

export const ProductDisplay = (props) => {
  const { product } = props
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
          <img className="main-img" src={product.images} alt="" />
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
        </div>
      </div>
    </div>
  )
}
