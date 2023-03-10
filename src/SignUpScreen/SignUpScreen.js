import React, { useRef } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './SignUpScreen.css';

function SignUpScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passRef} placeholder='Password' type='password' />
        <button type='submit' onClick={register}>
          Sign Up
        </button>

        <h4>
          <span className='signupScreen_gray'>
            Already have an account?{' '}
          </span>
          <span className='signupScreen_link' onClick={() => navigate('/login')}>
            Sign in now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
