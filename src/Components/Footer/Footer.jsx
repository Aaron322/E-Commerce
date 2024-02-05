import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
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
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright @ 2024</p>
      </div>
    </div>
  )
}
