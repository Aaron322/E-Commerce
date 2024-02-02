import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext } from '../../Context/ShopContext'
import logo from '../Assets/image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartItems } from '../CartItems/CartItems'

export const Navbar = () => {
  const [menu, setMenu] = useState('Shop')
  const { all_product } = useContext(ShopContext)
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
            setMenu('home')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
          {menu === 'home' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('mens')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/mens">
            Men
          </Link>
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('womens')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/womens">
            Women
          </Link>
          {menu === 'womens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids')
          }}
        >
          <Link style={{ textDecoration: 'none' }} to="/kids">
            Kids
          </Link>
          {menu === 'Kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} fixedWidth size="2x" />
        </Link>
        <div className="nav-cart-count">
          {/* {all_product.map((e) => {
            CartItems[e]
          })} */}
        </div>
      </div>
    </div>
  )
}
