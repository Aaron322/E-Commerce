import React from 'react'
import { useState } from "react";
import {Link} from "react-router-dom"
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.jpg'

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
        {/* hr bar will appear when user clicks the tag */}

            <li onClick={() => {setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "Shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Category-1")}}><Link style={{textDecoration: 'none'}}  to='/category-1'>Category-1</Link>{menu === "Category-1"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Category-2")}}><Link style={{textDecoration: 'none'}}  to='/category-2'>Category-2</Link>{menu === "Category-2"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("Category-3")}}><Link style={{textDecoration: 'none'}}  to='/category-3'>Category-3</Link>{menu === "Category-3"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src= {cart_icon} alt='' /></Link>
          <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
