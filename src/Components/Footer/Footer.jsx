import React, { useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faWeixin,
} from '@fortawesome/free-brands-svg-icons'
import wechat from '../Assets/image/wechat.jpg'

export const Footer = () => {
  // State to manage the visibility of the popup
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible)
  }

  return (
    <div className="footer">
      <div className="footer-logo">
        <FontAwesomeIcon
          className="faBagShopping"
          icon={faBagShopping}
          fixedWidth
          size="2x"
        />
        <p>FOOTER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FontAwesomeIcon
            className="instagram-icon"
            icon={faInstagram}
            fixedWidth
            size="2x"
          />
        </div>
        <div className="footer-icons-container">
          <FontAwesomeIcon icon={faFacebook} fixedWidth size="2x" />
        </div>
        <div className="footer-icons-container">
          <FontAwesomeIcon icon={faWhatsapp} fixedWidth size="2x" />
        </div>
        <div className="footer-icons-container" onClick={togglePopup}>
          <FontAwesomeIcon icon={faWeixin} fixedWidth size="2x" />
        </div>
        {isPopupVisible && (
          <div className="popup">
            <img src={wechat} alt="" />
            <button onClick={togglePopup}>Close</button>
          </div>
        )}
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright @ 2024</p>
      </div>
    </div>
  )
}
