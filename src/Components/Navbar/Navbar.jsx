import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  const [menu, setMenu] = useState('Shop')
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Store Name</p>
      </div>
      <ul className="nav-menu">
        {/* hr bar will appear when user clicks the tag */}

        <li
          onClick={() => {
            setMenu('Home')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
          {menu === 'Home' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('Category-1')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/category-1">
            Category-1
          </Link>
          {menu === 'Category-1' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('Category-2')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/category-2">
            Category-2
          </Link>
          {menu === 'Category-2' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('Category-3')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/category-3">
            Category-3
          </Link>
          {menu === 'Category-3' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} fixedWidth size="2x" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
