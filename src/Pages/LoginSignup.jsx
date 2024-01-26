import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sig Up</h1>

          <div className="loginsignup-fields">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Emial Address" />
            <input type="password" placeholder="Your Password" />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>Login Here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
