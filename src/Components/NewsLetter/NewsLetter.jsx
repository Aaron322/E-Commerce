import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>
        <h1>Get Exclusive Offers On you Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe</button>
        </div>
      </h1>
    </div>
  )
}
