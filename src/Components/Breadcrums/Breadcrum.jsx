import React from 'react'
import './Breadcrum.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Breadcrum = (props) => {
  const { product } = props
  return (
    <div className="breadcrum">
      HOME
      <FontAwesomeIcon icon={faArrowRight} fixedWidth /> SHOP{' '}
      <FontAwesomeIcon icon={faArrowRight} fixedWidth />
      {product.category}
      <FontAwesomeIcon icon={faArrowRight} fixedWidth />
      {product.name}
    </div>
  )
}
