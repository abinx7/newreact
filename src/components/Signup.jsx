import React from 'react';
import './Login.css';
import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";

const Signup = () => {
  return (
    <div className='wrapper'>
    <div className="form-box signup">
        <form action="">
          <h1>Signup</h1>
          <div className="input-box">
            <input type="text"placeholder='Username' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="email"placeholder='Email' required />
            <FaEnvelope className='icon' />
          </div>
          <div className="input-box">
            <input type="password"placeholder='Password' required />
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />I agree to the terms & conditions</label>
           
          </div>


          <button type="submit">Signup</button>
          <div className="register-link">
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        </form>
        </div>


    </div>
  )
}

export default Signup