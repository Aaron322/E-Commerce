import React from 'react'
import './Hero.css'
import hero_image from '../Assets/image/hero_image.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAKS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <FontAwesomeIcon icon={faNewspaper} fixedWidth size="7x" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          {/* <img src={arrow_icon} alt="" /> */}
          <FontAwesomeIcon icon={faHandPointRight} fixedWidth size="2x" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}
