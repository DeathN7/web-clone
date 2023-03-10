import React, { useState } from 'react';
import "./Login.css";
import LoginScreen from './LoginScreen';

function Login() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className='Login'>
        <div className='Login_background'>
            <img 
            className='Login_logo'
            src="https://media.netflix.com/static/images/Netflix-Logo.svg"
            alt=""
            />
            <button onClick={() =>  setSignIn(true)}
            className='Login_button'>Sign In</button>
            <div className='Login_gradient' />
        </div>
      <div className='Login_body'>
        {signIn ? (
          <LoginScreen />
        ):(
        <>
          <h1>Welcome</h1>
          <h3>Ready to watch? Enter your email to create or restart your membership</h3>
          <div className='Login_input'>
            <form>
              <input type="email" placeholder='Email Address' />
              <button onClick={() => setSignIn(true)} 
              className='Login_getStart'> GET STARTED </button>
            </form>
          </div>
        </>
        )}
      </div>
    </div>
  )
}

export default Login
